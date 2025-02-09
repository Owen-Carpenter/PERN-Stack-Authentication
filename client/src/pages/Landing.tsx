import "../styles/Landing.css"
import { Link } from "react-router-dom";
import "../styles/General.css"

export function Landing(){

    return(
        <>
            <div className="content-container">
                <h1 className="title">See you again soon!</h1>
                <button className="logout-btn"><Link to="/login">Logout</Link></button>
            </div>
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
        </>
    );
}