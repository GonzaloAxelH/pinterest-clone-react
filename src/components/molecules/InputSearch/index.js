import IconLupa from "../../atoms/Icons/IconLupa";
import styled from "styled-components";
import IconEquis from "../../atoms/Icons/IconEquis";

const WrapperInputSearch = styled.div`
  border:${(props)=> props.isModalOpen ? '3px solid #1fbcdf' :"0px solid transparent"}; 
  border-radius: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 0px 0 16px;
  background-color: rgb(239, 239, 239);
  &:hover {
    background-color: rgb(225, 225, 225);
    input {
      background-color: rgb(225, 225, 225);
    }
  }
`;
const Input = styled.input`
  border-radius: 50px;
  border: none;
  color: rgb(51, 51, 51);
  font-size: 16px;
  height: 48px;
  outline: none;
  padding: 0;
  background-color: rgb(239, 239, 239);
  width: 100%;
`;
const WrapperIcon = styled.div`
  width: 23px;
  svg {
    fill: #767676;
  }
`;
const WrapperIcon2 = styled.div`
  width: 50.25px;
  height: 48px;
  div {
    width: 50.25px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
  }
  div:hover {
    background-color: rgb(212, 212, 212);
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const InputSearch = ({
  onClikClose,
  value,
  onClick,
  referencia,
  onChange,
  isModalOpen
}) => {
  return (
    <WrapperInputSearch isModalOpen={isModalOpen}>
      <WrapperIcon>
        <IconLupa />
      </WrapperIcon>
      <WrapperInput>
        <Input
          onClick={onClick}
          ref={referencia}
          autoComplete="off"
          id="input-search"
          onChange={onChange}
          value={value}
          type="text"
          placeholder="Buscar"
        />
        <WrapperIcon2>
          {value.length !== 0 ? (
            <div onClick={onClikClose}>
              <IconEquis />
            </div>
          ) : null}
        </WrapperIcon2>
      </WrapperInput>
    </WrapperInputSearch>
  );
};
export default InputSearch;
