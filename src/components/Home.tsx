import React from "react";
import {Link} from "react-router-dom";
import './Home.css'
import cat from "../content/frontpagecat.png"

const Home = () =>{
    return(
        <div className="screen">
           <div className="homecontainer"> <Link to="https://github.com/vivalaclara"><img src={cat} className="nerdycat" alt="nerdy cat!" /></Link>
            <h1 className="hometitle">MathCat</h1>
            </div>
            <p className="homesubtitle">Olá! O MathCat é uma ferramenta para verificar respostas de alguns problemas matemáticos simples
            Para ver outros projetos, clique no gatinho, ele te rediciona para o meu github. Bons cálculos! =^･ω･^=</p> 
           <div className="btnscontainer">
            <button className="optionbtn">GEOMETRIA</button>
            <button className="optionbtn">FUNÇÕES SIMPLES</button>
            <button className="optionbtn">TRIGONOMETRIA</button>
            </div>

        </div>
    );
}
export default Home;