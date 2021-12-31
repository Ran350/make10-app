import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, Dispatch, SetStateAction, VFC } from "react";

type Props = {
  inputs: string[];
  setInputs: Dispatch<SetStateAction<string[]>>;
  isXS: boolean;
};

export const Input: VFC<Props> = ({ inputs, setInputs, isXS }) => {
  const handleChange = (digit: number, e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    if (val.length > 1) return;

    const newInputs = [...inputs];
    newInputs[digit] = val;
    setInputs(newInputs);
  };

  return (
    <Box
      sx={{
        width: isXS ? "16rem" : "28rem",
        display: "flex",
        justifyContent: "space-between",
        gap: isXS ? "0.2rem" : "2rem",
      }}
    >
      {inputs.map((_, i) => (
        <TextField
          key={i}
          type="number"
          value={inputs[i]}
          onChange={handleChange.bind(this, i)}
          autoFocus={true}
          sx={{ display: "block" }}
          inputProps={{
            style: { fontSize: "1.5rem", textAlign: "center" },
            className: "no-spin",
          }}
        />
      ))}
    </Box>
  );
};
