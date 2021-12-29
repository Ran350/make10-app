import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { ChangeEvent, Dispatch, SetStateAction, VFC } from "react";

type Props = {
  inputs: string[];
  setInputs: Dispatch<SetStateAction<string[]>>;
  isXS?: boolean;
};

export const Input: VFC<Props> = ({ inputs, setInputs, isXS = true }) => {
  const handleChange = (digit: number, e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    if (val.length > 1) return;

    const newInputs = inputs.map((num, i) => (i === digit ? val : num));
    setInputs(newInputs);
  };

  return (
    <Box
      sx={{
        width: isXS ? "17rem" : "28rem",
        display: "flex",
        justifyContent: "space-between",
        gap: isXS ? "0.2rem" : "2rem",
      }}
    >
      {Array.from({ length: inputs.length }).map((_, i) => (
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
