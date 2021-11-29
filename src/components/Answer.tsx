import { VFC } from "react";
import { calculate } from "../lib/make10/src";

type Props = {
  input: string;
};

export const Answer: VFC<Props> = ({ input }) => {
  if (!/\d{2,5}/.test(input)) {
    // 2 文字以上 5 文字以下の連続数字 でない時
    return <></>;
  }

  const answers = calculate(input.split(""));

  if (answers.length === 0) {
    return <p>no answer</p>;
  }

  return (
    <div>
      <p>found {answers.length} answers</p>

      {answers.map((answer) => (
        <p key={answer}>{answer}</p>
      ))}
    </div>
  );
};
