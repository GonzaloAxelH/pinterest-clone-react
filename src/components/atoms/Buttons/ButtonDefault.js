import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.a`
  font-family: "Roboto", sans-serif;
  border-radius: 25px;
  border: none;
  text-decoration: none;
  background-color: ${(props) => props.backgroundColor};
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.backgroundColorHover};
    div {
      background-color: ${(props) => props.backgroundColorHover};
    }
  }

  transition: 0ms.2s all;
  div {
    transition: 0ms.2s all;
    background-color: ${(props) => props.backgroundColor};
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    font-size: 16px;
    color: ${(props) => props.color};
    font-weight: bold;
  }
`;

const ButtonDefault = ({ label, type }) => {
  const backgroundColor = type === "primary" ? "#111111" : "#fff";
  const backgroundColorHover =
    type === "primary" ? "#111111" : "rgb(239,239,239)";
  const color = type === "primary" ? "#fff" : "#111111";
  return (
    <Button
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      color={color}
      href="#"
    >
      <div>
        <span>{label}</span>
      </div>
    </Button>
  );
};

ButtonDefault.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

ButtonDefault.defaultProps = {
  type: "primary",
  label: "ButtonDefault",
};
export default ButtonDefault;
