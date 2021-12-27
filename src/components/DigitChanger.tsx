import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";
import { Dispatch, SetStateAction, VFC } from "react";

type Props = {
  inputs: string[];
  setInputs: Dispatch<SetStateAction<string[]>>;
  isXS?: boolean;
};

export const DigitDecrement: VFC<Props> = ({ inputs, setInputs, isXS = true }) => {
  const handleClick = () => {
    if (inputs.length <= 2) return;
    setInputs(inputs.slice(0, inputs.length - 1));
  };

  return (
    <IconButton onClick={handleClick} size="medium">
      <RemoveCircleIcon fontSize="inherit" color={inputs.length > 2 ? "error" : "disabled"} />
    </IconButton>
  );
};

export const DigitIncrement: VFC<Props> = ({ inputs, setInputs }) => {
  const handleClick = () => {
    if (inputs.length >= 5) return;
    setInputs([...inputs, ""]);
  };

  return (
    <IconButton onClick={handleClick} size="medium">
      <AddCircleIcon fontSize="inherit" color={inputs.length < 5 ? "primary" : "disabled"} />
    </IconButton>
  );
};
