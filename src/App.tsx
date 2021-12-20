import { Card, Container, Grid, Typography } from "@mui/material";
import { useState, VFC } from "react";
import { Answer } from "./components/Answer";
import { DigitDecrement, DigitIncrement } from "./components/DigitChanger";
import { Input } from "./components/Input";

const App: VFC = () => {
  const [inputs, setInputs] = useState<string[]>(["1", "1", "5", "8"]);

  return (
    <Container sx={{ width: "42rem", fontSize: "1rem", margin: "2rem auto" }}>
      <Typography variant="h4" align="center" sx={{ fontSize: "2rem", color: "#333" }}>
        Make10 Puzzle
      </Typography>

      <Grid container justifyContent="space-between" alignItems="center" sx={{ margin: "2rem auto" }}>
        <DigitDecrement inputs={inputs} setInputs={setInputs} />
        <Input inputs={inputs} setInputs={setInputs} />
        <DigitIncrement inputs={inputs} setInputs={setInputs} />
      </Grid>

      <Card sx={{ boxShadow: 3, width: "28rem", margin: "0 auto" }}>
        <Answer inputs={inputs} />
      </Card>
    </Container>
  );
};

export default App;
