import reactDom from "react-dom";
import { useEffect } from "react";
import styled from "styled-components";

const WrapperModal = styled.div`
  position: fixed;
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 0px 0 15px 15px ;
  background-color: #f5f5f5;
  padding: 1em;
  display:${props => (props.openModal ? "block" : "none")};

  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  right: ${(props) => props.right || "0"};
  bottom: ${(props) => props.bottom || "0"};
  z-index:30;
`;



export default function Modal({ children, left, top, bottom, right,width,height ,openModal,referencia,modalRootId}) {
  const el = document.createElement("div");
  const modalRoot = document.getElementById(modalRootId);
  useEffect(() => {
        modalRoot.appendChild(el);
        return () => {
            modalRoot.removeChild(el);
        }
    },[]);

  return reactDom.createPortal(
            <WrapperModal
                width={width}
                height={height}
                ref={referencia}
                openModal={openModal}
                left={left}
                top={top}
                bottom={bottom}
                right={right}
            >
            {children}
            </WrapperModal>,
    modalRoot
  );
}
