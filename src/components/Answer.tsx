import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import { Box } from "@mui/system";
import { VFC } from "react";
import { calculate } from "../lib/make10/src";

type Props = {
  inputs: string[];
  isXS?: boolean;
};

export const Answer: VFC<Props> = ({ inputs, isXS = true }) => {
  if (inputs.includes("")) {
    return <NoAnswer />;
  }

  const answers = calculate(inputs);

  if (answers.length === 0) {
    return <NoAnswer />;
  }

  return (
    <List
      sx={
        isXS
          ? {
              textAlign: "center",
              maxHeight: "22rem",
              overflow: "auto",
            }
          : {
              px: "8rem",
              maxHeight: "28rem",
              overflow: "auto",
            }
      }
      subheader={<li />}
    >
      <ListSubheader>found {answers.length} answer(s)</ListSubheader>

      {answers.map((answer, i) => (
        <ListItem key={i}>
          <ListItemText primary={answer} sx={isXS ? { px: "3rem" } : {}} />
        </ListItem>
      ))}
    </List>
  );
};

const NoAnswer: VFC = () => <Box sx={{ margin: "2rem", textAlign: "center" }}>no answer</Box>;
