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
    <Container sx={{ m: isXS ? "2rem auto" : "1rem auto", p: 0, fontSize: "1rem" }}>
      <Typography align="center" color="#333" sx={{ fontSize: isXS ? "1.5rem" : "2rem" }}>
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

      <Card sx={{ m: "0 auto", boxShadow: 3, width: isXS ? "16rem" : "28rem" }}>
        <Answer inputs={inputs} isXS={isXS} />
      </Card>
    </Container>
  );
};

export default App;
