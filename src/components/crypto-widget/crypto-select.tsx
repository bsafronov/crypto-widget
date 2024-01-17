import { Select } from "../ui/select";
import { currency } from "./consts";
import { Cryptocurrency } from "./types";

type Props = {
  value: Cryptocurrency;
  onChange: (option: Cryptocurrency) => void;
};

export const CryptoSelect = ({ value, onChange }: Props) => {
  return (
    <Select
      className="py-1 px-2 min-w-[4.8rem] border-none rounded-none gap-3"
      options={currency}
      value={value}
      onChange={onChange}
      renderSelected={Selected}
      renderOption={Option}
    />
  );
};

const Selected = ({ abbr, thumb }: Cryptocurrency) => {
  return (
    <div className="flex flex-col items-center text-xs gap-0.5 grow">
      {thumb}
      <span>{abbr}</span>
    </div>
  );
};

const Option = ({ label, thumb }: Cryptocurrency) => {
  return (
    <div className="flex gap-2 items-center">
      {thumb}
      <span>{label}</span>
    </div>
  );
};
