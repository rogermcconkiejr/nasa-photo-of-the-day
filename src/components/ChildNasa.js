import React from "react";

const ChildNasa = props => {
    console.log("HERE", props);
    return (
        <div className = "dataCard">
            <h1 className = "dataCardTitle">{props.dailyPhoto.title}</h1>
            <h4 className = "dataCardDate">{props.dailyPhoto.date}</h4>
            <img className = "dailyPhoto" alt = "random space photo" src= {props.dailyPhoto.hdurl}></img>
            <p className = "desc">{props.dailyPhoto.explanation}</p>
        </div>
    )
};

export default ChildNasa