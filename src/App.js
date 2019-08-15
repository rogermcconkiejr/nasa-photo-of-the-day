import React from "react";
import "./App.css";
import ParentNasa from "./components/ParentNasa";
import 'semantic-ui-css/semantic.min.css';
import Header from "./components/Header";
import styled from "styled-components";
import SideBar from "./components/SideBar";

const BackgroundImage = styled.body`
background-image: linear-gradient(to bottom right, #0F2027, #203A43, #2C5364);
`;


function App() {
  return (

    <BackgroundImage>
    <div className="App">
      <Header />
      <ParentNasa/>
    </div>
    </BackgroundImage>
    
  );
}

export default App;
