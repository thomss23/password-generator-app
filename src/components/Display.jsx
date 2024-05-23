import '../styles/Display.css'

import PropTypes from "prop-types";


function Display({password}) {


    return(
        <div className="displayContainer">
            <div id='password'>{password}</div>
            <img src='src\assets\images\icon-copy.svg' alt='copy icon'></img>
        </div>  
    )

}


Display.propTypes = {
    password: PropTypes.string,
};

export default Display;