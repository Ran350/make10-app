import { Card, Container, Grid, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, VFC } from "react";
import { Answer } from "./components/Answer";
import { DigitDecrement, DigitIncrement } from "./components/DigitChanger";
import { Input } from "./components/Input";

const App: VFC = () => {
  const [inputs, setInputs] = useState<string[]>(["1", "1", "5", "8"]);
  const isXS = useMediaQuery("(max-width:600px)");

  return (
    <Container sx={isXS ? { m: "1rem auto", p: 0, fontSize: "1rem" } : { m: "2rem auto", p: 0, fontSize: "1rem" }}>
      <Typography align="center" sx={{ fontSize: "2rem", color: "#333" }}>
        Make 10 Puzzle
      </Typography>

      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={isXS ? { m: "1rem auto" } : { m: "2rem auto", width: "40rem" }}
      >
        <DigitDecrement inputs={inputs} setInputs={setInputs} />
        <Input inputs={inputs} setInputs={setInputs} isXS={isXS} />
        <DigitIncrement inputs={inputs} setInputs={setInputs} />
      </Grid>

      <Card sx={isXS ? { boxShadow: 3, width: "17rem", m: "0 auto" } : { boxShadow: 3, width: "28rem", m: "0 auto" }}>
        <Answer inputs={inputs} isXS={isXS} />
      </Card>
    </Container>
  );
};

export default App;
