export type CryptocurrencyAbbr = "USDT" | "ETH" | "BTC";

export type CryptoсurrencyProps = {
  initialValue?: number;
  initialCurrencyFrom?: CryptocurrencyAbbr;
  initialCurrencyTo?: CryptocurrencyAbbr;
};

export type Cryptocurrency = {
  thumb: React.ReactNode;
  abbr: CryptocurrencyAbbr;
  label: string;
};

type CryptoсurrencyPriceMap = Record<CryptocurrencyAbbr, number>;
export type CryptoсurrencyPrice = Record<
  CryptocurrencyAbbr,
  CryptoсurrencyPriceMap
>;

export type CryptoсurrencyUpdatePriceProps = {
  dest: "from" | "to";
  value: string;
  currencyFrom: CryptocurrencyAbbr;
  currencyTo: CryptocurrencyAbbr;
};
