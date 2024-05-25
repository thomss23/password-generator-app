import '../styles/Display.css'

import PropTypes from "prop-types";


function Display({password}) {

    return(
        <div className="displayContainer">
            <div className={password ? 'active-password' : 'inactive-password'}>{password ? password : 'P4$5W0rD'}</div>
            <img src='src\assets\images\icon-copy.svg' alt='copy icon'></img>
        </div>  
    )

}


Display.propTypes = {
    password: PropTypes.string,
};

export default Display;