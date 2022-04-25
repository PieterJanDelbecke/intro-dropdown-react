import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import HomePage from "./pages/homePage";
import GlobalStyles from "./styles/GlobalStyles";
import ToDoListPage from "./pages/toDoListPage";

const Container = styled.div`
  width: 1440px;
  height: 100vh;
  border: 1px black solid;
  margin: 0px auto;
`;

function App() {
  return (
    <>
      <Container>
      <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="todolist" element={<ToDoListPage />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
