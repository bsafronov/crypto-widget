import { CryptoWidget } from "@/components/crypto-widget";

export default function Home() {
  return (
    <div className="p-4 mx-auto max-w-screen-lg flex items-center justify-center flex-col">
      <h1 className="mb-4 animate-background-pan bg-gradient-to-r from-sky-600 via-amber-600 via-pink-600 to-sky-600 bg-[size:200%] bg-clip-text text-2xl font-extrabold leading-none text-transparent">
        Crypto Widget
      </h1>
      <CryptoWidget
        initialCurrencyFrom="BTC"
        initialCurrencyTo="ETH"
        initialValue={1}
      />
    </div>
  );
}
