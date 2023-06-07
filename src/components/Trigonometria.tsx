import {Link} from "react-router-dom";
import './mathpages.css'
import kitten from "../content/graduatedcat.png"

const Trigonometria = () =>{
    return(
    <div className="screen">
        <div className="homecontainer">
            <img src={kitten} className="nerdycat" alt="nerdy cat!" />
            <h1 className="mathtitle">Trigonometria</h1> </div>        
        <div className="btnscontainer">
            <button className="optionbtn">SEN, COS, TAN</button>
            </div>
    </div>
    )
    
};

export default Trigonometria