import styled from "styled-components";
import ButtonCampana from "../../atoms/Buttons/ButtonCampana";
import ButtonDefault from "../../atoms/Buttons/ButtonDefault";
import Logo from "../../atoms/Imgs/Logo";
import Form from "./Form";
const HeaderStyled = styled.div`
  display: flex;
  background: #fff;
  z-index: 10;
  position:fixed;
  width: 100%;
  height: 80px;
  align-items: center;
  padding: 4px 16px;
  .logo__container{
    width: 48px;
    height: 48px;
  }
`;
const Options = styled.div`
  display: flex;
`;
export default function Header() {
  return (
    <HeaderStyled>
      <div className="logo__container">
        <Logo />
      </div>

      <div className="btn_container">
        <ButtonDefault label="inicio" type="primary" />
      </div>
      <div className="btn_container">
        <ButtonDefault label="fin" type="secondary" />
      </div>

      <Form />
      <Options>
        <ButtonCampana />
        <ButtonCampana />
        <ButtonCampana />
      </Options>
    </HeaderStyled>
  );
}
