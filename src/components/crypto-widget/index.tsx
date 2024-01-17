"use client";

import { ArrowRightLeft, Loader2 } from "lucide-react";
import { CryptoSelect } from "./crypto-select";
import { useCryptocurrency } from "./use-cryptocurrency";
import { CryptoсurrencyProps } from "./types";

export const CryptoWidget = (props: CryptoсurrencyProps) => {
  const {
    isLoading,
    fromValue,
    toValue,
    fromValueCurrency,
    handleChangeValue,
    handleChangeValueCurrency,
    toValueCurrency,
    description,
  } = useCryptocurrency(props);

  if (isLoading) {
    return (
      <div className="w-full border rounded-md bg-border flex items-center justify-center h-11">
        <Loader2 className="text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center gap-2 md:flex-row mb-4">
        <div className="flex border rounded-md overflow-hidden grow w-full">
          <input
            className="outline-none px-2 border-r w-full text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            value={fromValue}
            onChange={(e) => handleChangeValue(e, "from")}
          />
          <CryptoSelect
            value={fromValueCurrency}
            onChange={(v) => handleChangeValueCurrency(v, "from")}
          />
        </div>
        <ArrowRightLeft className="w-4 h-4 text-muted-foreground rotate-90 md:rotate-0 shrink-0" />
        <div className="flex border rounded-md overflow-hidden grow w-full">
          <input
            className="outline-none px-2 border-r w-full text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            value={toValue}
            onChange={(e) => handleChangeValue(e, "to")}
          />
          <CryptoSelect
            value={toValueCurrency}
            onChange={(v) => handleChangeValueCurrency(v, "to")}
          />
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center md:text-start">
        {description}
      </p>
    </div>
  );
};
