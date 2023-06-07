import {Link} from "react-router-dom";
import './mathpages.css'
import feline from "../content/readingcat.png"

const Funcoes = () =>{
    return(
    <div className="screen">
        <div className="homecontainer">
            <img src={feline} className="nerdycat" alt="nerdy cat!" />
            <h1 className="mathtitle">Funções Simples</h1> </div>        
        <div className="btnscontainer">
            <button className="optionbtn">1º grau</button>
            <button className="optionbtn">2º grau</button>
            </div>
    </div>
    )
    
};

export default Funcoes