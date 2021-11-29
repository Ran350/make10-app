import { useState, VFC } from "react";
import { Answer } from "./components/Answer";
import { Input } from "./components/Input";

const App: VFC = () => {
  const [input, setInput] = useState<string>("");

  return (
    <div>
      <Input input={input} setInput={setInput} />
      <Answer input={input} />
    </div>
  );
};

export default App;
