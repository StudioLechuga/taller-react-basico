import React, { useContext } from "react";
import { AppContext } from "../context/App";
import InputComponent from "../components/InputComponent";
import Container from "../components/Container";
import ButtonTip from "../components/ButtonTip";
import CardDetails from "../components/CardDetails";
import useTextInput from "../hooks/useTextInput";
function Home() {
  const { state, setActiveTip, setBill, setNumberOfPeople, setCustomTip } =
    useContext(AppContext);

  console.log(state);
  return (
    <div className="container">
      <div className="container-title">
        <h1 className="container-title_h1">SPLI</h1>
        <h1 className="container-title_h1">TTER</h1>
      </div>
      <div className="container-form">
        <Container title="Bill">
          <InputComponent type="dollar" action={setBill} value={state.bill} />
        </Container>
        <Container title="Select Tip %">
          <div className="container-tip">
            {state.tips.map((tip) => {
              if (tip.label === "Custom") {
                return (
                  <InputComponent
                    label={tip.label}
                    action={setCustomTip}
                    value={tip.value}
                    clicl={() => {
                      setActiveTip(tip);
                    }}
                  />
                );
              } else {
                return (
                  <ButtonTip
                    item={tip}
                    tip={tip.value}
                    label={tip.label}
                    isActive={tip.isActive}
                    action={setActiveTip}
                  />
                );
              }
            })}
          </div>
        </Container>

        <Container title="Number of People">
          <InputComponent
            type="person"
            action={setNumberOfPeople}
            value={state.numberOfPeople}
            alert={state.numberOfPeople === 0 ? state.bill >= 1 && true : false}
          />
        </Container>
        <CardDetails {...state} />
      </div>
    </div>
  );
}

export default Home;
