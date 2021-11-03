import React from "react";
import InputComponent from "../components/InputComponent";
import Container from "../components/Container";
import ButtonTip from "../components/ButtonTip";
import CardDetails from "../components/CardDetails";
function Home() {
  return (
    <div className="container">
      <div className="container-title">
        <h1 className="container-title_h1">SPLI</h1>
        <h1 className="container-title_h1">TTER</h1>
      </div>
      <div className="container-form">
        <Container title="Bill">
          <InputComponent type="dollar" />
        </Container>
        <Container title="Select Tip %">
          <div className="container-tip">
            <ButtonTip tip={5} />
            <ButtonTip tip={10} />
            <ButtonTip tip={15} />

            <ButtonTip tip={25} isActive={true} />
            <ButtonTip tip={10} />
            <InputComponent label="Custom" />
          </div>
        </Container>

        <Container title="Number of People">
          <InputComponent type="person" />
        </Container>
        <CardDetails/>
      </div>
    </div>
  );
}

export default Home;
