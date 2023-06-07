import React from "react";
import {Link} from "react-router-dom";
import './Home.css'
import cat from "../content/frontpagecat.png"

const Home = () =>{
    return(
        <div className="screen">
           <div className="homecontainer"> 
                <Link to="https://github.com/vivalaclara"><img src={cat} className="nerdycat" alt="nerdy cat!" /></Link>
                <h1 className="hometitle">MathCat</h1>
            </div>
            <p className="homesubtitle">Olá! O MathCat é uma ferramenta para verificar respostas de alguns problemas matemáticos simples
            Para ver outros projetos, clique no gatinho, ele te rediciona para o meu github. Bons cálculos! =^･ω･^=</p> 
           <div className="btnscontainer">
                <Link to="/geometria"><button className="optionbtn">GEOMETRIA</button></Link>
                <Link to="/funcoes"><button className="optionbtn">FUNÇÕES SIMPLES</button></Link>
                <Link to="/trigonometria"><button className="optionbtn">TRIGONOMETRIA</button></Link>
            </div>

        </div>
    );
}
export default Home;