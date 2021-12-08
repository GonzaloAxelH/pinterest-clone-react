import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/templates/Header/Header";
const ContainerApp = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const App = () => {
  return (
    <ContainerApp>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  );
};

export default App;
