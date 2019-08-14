import React, {useEffect, useState} from "react";
import axios from "axios";
import ChildNasa from "./ChildNasa";

export default function ParentNasa(){
    const [universe, setUniverse] = useState([])

    useEffect(()=>{
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
            .then(response => {
                const dailyPhoto = response.data
                console.log("Daily Photo:", dailyPhoto);
                setUniverse(dailyPhoto);
            })
            .catch(err =>
                console.log(err)
                )
    }, []);

    return (
        <div className = "container">
            <div className= "card">
                <ChildNasa
                dailyPhoto= {universe}/>
            </div>
        </div>
    );
}