import React from "react";
import styled from "styled-components";
import 'semantic-ui-css/semantic.min.css';
import Buttons from "./Buttons";

const BlueH1 = styled.h1`
color: whitesmoke;
font-family: 'Merriweather', serif;
`;
const H4Col= styled.h4`
color: whitesmoke;
font-family: 'Merriweather', serif;
`;
const PText = styled.p`
color: whitesmoke;
font-family: 'Merriweather', serif;
padding:20px;
`;
const Image = styled.img`
height:550px;
width:800px;
margin-bottom:20px;
`;



const ChildNasa = props => {
    console.log("HERE", props);
    return (
        <div className = "dataCard">
            <BlueH1 className = "dataCardTitle">{props.dailyPhoto.title}</BlueH1>
            <H4Col className = "dataCardDate">{props.dailyPhoto.date}</H4Col>
            <Image className = "dailyPhoto" alt = "random space photo" src= {props.dailyPhoto.hdurl}></Image>
            <Buttons />
            <PText className = "desc">{props.dailyPhoto.explanation}</PText>
        </div>
    )
};

export default ChildNasa