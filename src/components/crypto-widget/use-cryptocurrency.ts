import { ChangeEvent, useEffect, useState } from "react";
import { currency } from "./consts";
import {
  Cryptocurrency,
  CryptoсurrencyPrice,
  CryptoсurrencyProps,
  CryptoсurrencyUpdatePriceProps,
} from "./types";

export const useCryptocurrency = ({
  initialCurrencyFrom,
  initialCurrencyTo,
  initialValue,
}: CryptoсurrencyProps) => {
  const [data, setData] = useState<CryptoсurrencyPrice | null>(null);

  const [fromValue, setFromValue] = useState<string>(
    initialValue?.toString() ?? "1"
  );
  const [toValue, setToValue] = useState<string>("");

  const [fromValueCurrency, setFromValueCurrency] = useState<Cryptocurrency>(
    currency.find((c) => c.abbr === initialCurrencyFrom) ?? currency[0]
  );
  const [toValueCurrency, setToValueCurrency] = useState<Cryptocurrency>(
    currency.find((c) => c.abbr === initialCurrencyTo) ?? currency[1]
  );

  useEffect(() => {
    const getCryptoCurrency = async () => {
      const currencyKeysString = currency.map((c) => c.abbr).join(",");
      const res = await fetch(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${currencyKeysString}&tsyms=${currencyKeysString}`
      );

      const data = await res.json();

      setData(data);
    };

    getCryptoCurrency();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!data) return;

    updatePrice({
      dest: "to",
      value: fromValue,
      currencyFrom: fromValueCurrency.abbr,
      currencyTo: toValueCurrency.abbr,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleChangeValue = (
    e: ChangeEvent<HTMLInputElement>,
    dest: "from" | "to"
  ) => {
    const value = e.target.value;

    const isNumber = /^[0-9]*\.?[0-9]*$/.test(value);
    if (!isNumber) return;

    if (dest === "from") {
      setFromValue(value);
      updatePrice({
        dest: "to",
        value: value,
        currencyFrom: fromValueCurrency.abbr,
        currencyTo: toValueCurrency.abbr,
      });
    }

    if (dest === "to") {
      setToValue(value);
      updatePrice({
        dest: "from",
        value: value,
        currencyFrom: toValueCurrency.abbr,
        currencyTo: fromValueCurrency.abbr,
      });
    }
  };

  const handleChangeValueCurrency = (
    value: Cryptocurrency,
    dest: "from" | "to"
  ) => {
    if (dest === "from") {
      setFromValueCurrency(value);
      updatePrice({
        dest: "to",
        value: fromValue,
        currencyFrom: value.abbr,
        currencyTo: toValueCurrency.abbr,
      });
    }
    if (dest === "to") {
      setToValueCurrency(value);
      updatePrice({
        dest: "to",
        value: fromValue,
        currencyFrom: fromValueCurrency.abbr,
        currencyTo: value.abbr,
      });
    }
  };

  // const formatPrice = (value: string) => {
  //   if (value.endsWith(".")) {
  //     return value;
  //   }

  //   return parseFloat((+value).toFixed(7));
  // };

  const updatePrice = ({
    currencyFrom,
    currencyTo,
    dest,
    value,
  }: CryptoсurrencyUpdatePriceProps) => {
    if (!data) return;

    const calcValue = parseFloat(value) * data[currencyFrom][currencyTo];
    const isNaN = Number.isNaN(calcValue);
    const newValue = isNaN ? "" : calcValue.toString();

    if (dest === "from") {
      setFromValue(newValue);
    }

    if (dest === "to") {
      setToValue(newValue);
    }
  };

  return {
    isLoading: !data,
    // fromValue: formatPrice(fromValue),
    // toValue: formatPrice(toValue),
    fromValue: fromValue,
    toValue: toValue,
    handleChangeValue,
    handleChangeValueCurrency,
    fromValueCurrency,
    toValueCurrency,
  };
};
