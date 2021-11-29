import { ChangeEvent, Dispatch, SetStateAction, VFC } from "react";

type Props = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
};

export const Input: VFC<Props> = ({ input, setInput }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <div>
      <input value={input} onChange={handleChange} type="number"></input>
    </div>
  );
};
