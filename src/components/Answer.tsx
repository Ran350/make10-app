import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";
import { Box } from "@mui/system";
import { make10 } from "@ran350/make10";
import { VFC } from "react";

type Props = {
  inputs: string[];
  isXS?: boolean;
};

export const Answer: VFC<Props> = ({ inputs, isXS = true }) => {
  if (inputs.includes("")) {
    return <NoAnswer />;
  }

  const answers = make10(inputs);

  if (answers.length === 0) {
    return <NoAnswer />;
  }

  return (
    <List
      sx={{
        textAlign: "center",
        maxHeight: isXS ? "22rem" : "28rem",
        overflow: "auto",
      }}
      subheader={<li />}
    >
      <ListSubheader>found {answers.length} answer(s)</ListSubheader>

      {answers.map((answer, i) => (
        <ListItem key={i}>
          <ListItemText primary={answer} sx={{ px: isXS ? "3rem" : "8rem" }} />
        </ListItem>
      ))}
    </List>
  );
};

const NoAnswer: VFC = () => (
  <Box sx={{ margin: "2rem", textAlign: "center", fontFamily: "'Gill Sans', sans-serif" }}>no answer</Box>
);
