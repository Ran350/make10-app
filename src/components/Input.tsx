import { Grid, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, VFC } from "react";

type Props = {
  inputs: string[];
  setInputs: Dispatch<SetStateAction<string[]>>;
};

export const Input: VFC<Props> = ({ inputs, setInputs }) => {
  const handleChange = (digit: number, e: ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    if (val.length > 1) {
      return;
    }
    const newInputs = inputs.map((num, i) => (i === digit ? val : num));
    setInputs(newInputs);
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center" width="28rem">
      {Array.from({ length: inputs.length }).map((_, i) => (
        <TextField
          key={i}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          value={inputs[i]}
          onChange={handleChange.bind(this, i)}
          type="number"
          autoFocus={i === 0}
          sx={{ width: `calc(90%/${inputs.length})`, height: "4rem", fontSize: "2rem" }}
        />
      ))}
    </Grid>
  );
};
