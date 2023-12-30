import React from 'react'
import "./Card.css"
import { useContext } from "react";
import { themeContext } from '../../Context';
const Card = ({emoji,heading,details}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card" >
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span style={{color: darkMode ? "#282A3A": ""}}> {details}</span>
    </div>
  )
}

export default Card