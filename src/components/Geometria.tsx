import {Link} from "react-router-dom";
import './mathpages.css'
import kitty from "../content/teachercat.png"

const Geometria = () =>{
    return(
    <div className="screen">
        <div className="homecontainer">
            <img src={kitty} className="nerdycat" alt="nerdy cat!" />
            <h1 className="mathtitle">Geometria</h1> </div>        
        <div className="btnscontainer">
            <button className="optionbtn">ÁREA</button>
            <button className="optionbtn">VOLUME</button>
            </div>
    </div>
    )
    
};

export default Geometria