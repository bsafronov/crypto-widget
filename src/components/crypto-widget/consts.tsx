import { FaEthereum } from "react-icons/fa";
import { FaBitcoinSign } from "react-icons/fa6";
import { SiTether } from "react-icons/si";
import { Cryptocurrency } from "./types";

export const currency: Cryptocurrency[] = [
  {
    thumb: (
      <div className="p-0.5 bg-emerald-700 rounded-full">
        <SiTether className="h-3 w-3 text-white" />
      </div>
    ),
    abbr: "USDT",
    label: "USDT",
  },
  {
    thumb: (
      <div className="p-0.5 bg-fuchsia-700 rounded-full">
        <FaEthereum className="h-3 w-3 text-white" />
      </div>
    ),
    abbr: "ETH",
    label: "Ethereum",
  },
  {
    thumb: (
      <div className="bg-orange-600 rounded-full p-0.5">
        <FaBitcoinSign className="h-3 w-3 text-white" />
      </div>
    ),
    abbr: "BTC",
    label: "Bitcoin",
  },
];
