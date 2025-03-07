import React, { useState } from "react";
import { useSelector } from "react-redux";
import Question from "../../components/Question";
import { WizardState } from "../../store";
import Radio from "./../../components/Radio/index";
import Select from "./../../components/Select/index";
import { questions } from "./../../data/questions";
import * as S from "./styles";
import CalendarPicker from "./../../components/DatePicker/index";

const Wizard = () => {
  const { actualQuestion } = useSelector((store: WizardState) => store.wizard);
  const [disabled, setDisabled] = useState(true);
  const [finalData, setFinalData] = useState({});

  const handleChangeFinalData = (value: string, name: string) => {
    setFinalData({ ...finalData, [name]: value });
    setDisabled(false);
    console.log(finalData);
  };

  return (
    <S.Container>
      <Question
        disabled={disabled}
        question={questions[actualQuestion].question}
      >
        {questions[actualQuestion].type === "radio" &&
          questions[actualQuestion].answers?.map((answer) => (
            <Radio
              key={answer.id}
              label={answer.label}
              labelFor={answer.label}
              value={answer.value}
              onCheck={() => {
                setDisabled(false);
                handleChangeFinalData(
                  answer.value,
                  questions[actualQuestion].question
                );
              }}
            />
          ))}

        {questions[actualQuestion].type === "select" && (
          <Select
            label="Área de atuação"
            placeholder="Selecione sua área de atuação"
            items={questions[actualQuestion].answers || []}
            onChange={(value) => {
              value === "" ? setDisabled(true) : setDisabled(false);
            }}
          />
        )}

        {questions[actualQuestion].type === "date" && <CalendarPicker />}
      </Question>
    </S.Container>
  );
};

export default Wizard;
