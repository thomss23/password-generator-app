import { useState } from 'react';
import '../styles/Display.css';
import PropTypes from "prop-types";

function Display({ password }) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    }

    return (
        <div className="displayWrapper">
            <div className="displayContainer">
                <div className={password ? 'active-password' : 'inactive-password'}>
                    {password ? password : 'P4$5W0rD'}
                </div>
                <img
                    onClick={handleCopyToClipboard}
                    src='src/assets/images/icon-copy.svg'
                    alt='copy icon'
                />
                {isCopied && <div className='copy'>COPIED</div>}
            </div>
        </div>
    )
}

Display.propTypes = {
    password: PropTypes.string,
};

export default Display;
