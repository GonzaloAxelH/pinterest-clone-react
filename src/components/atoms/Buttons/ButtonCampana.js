import styled from 'styled-components';
import IconCampana from '../Icons/IconCampana';

const Wrapper = styled.div`
position:relative;
width: 48px;
height: 48px;
border-radius: 50%;
cursor: pointer;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        background-color: rgb(239, 239, 239);
    }
`;
const Number = styled.div`
    position:absolute;
    
    right:0;
    top:0;
    background: red;
    border-radius: 20px;
    padding:  0 3 0 2;
    height: 18px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items:center;
    div{
        font-family: sans-serif;
        font-weight: bold;
        color:#fff;
        font-size: 12px;
    }
`;
const Container = styled.div`
    svg{
        fill:#767676;
        width: 24px;
        height: 24px;
    }
`;

export default function ButtonCampana() {
    return (
        <Wrapper>
            <Container>
                <Number>
                <div>20</div>
                </Number>
             <IconCampana />
            </Container>
             
        </Wrapper>
    )
}
