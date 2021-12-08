import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import InputSearch from "../../molecules/InputSearch";
import Modal from "./Modal";
const FormWrapper = styled.form`
    width: 100%;
`;
export default function Form() {
  const body = document.getElementById("body");

  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("");
  const inputSearchRef = useRef();
  const modalRef = useRef();
  useEffect(() => {
    console.log(modalRef.current);
    console.log(inputSearchRef.current);
  const homePage = document.getElementById("home-page");
    body.addEventListener("click", (e) => {
      if(e.target === inputSearchRef.current || modalRef.current.contains(e.target)){
        
      }else{
        setModal(false);
        homePage.style.display='none'
      }
      
    });
    if(modal){
         homePage.style.display ="block"
    }else{
      homePage.style.display="none"
    }
  }, [modal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(false);
    setValue("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputSearch
        isModalOpen={modal}
        referencia={inputSearchRef}
        value={value}
        onClick={(e) => {
          setModal(true);
        }}
        onClikClose={(e) => {
          setModal(false);
          setValue("");
        }}
        onChange={(e) =>{
             setValue(e.target.value)
            setModal(true);
             console.log(e.target.value)
        }}
      />

      <Modal
        modalRootId="modal-root"
        width="72%"
        height="300px"
        referencia={modalRef}
        top="12.1%"
        left="15%"
        openModal={modal}
      >
        <h1>Modal</h1>
      </Modal>
    </FormWrapper>
  );
}
