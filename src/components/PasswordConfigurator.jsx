import '../styles/PasswordConfigurator.css';
import { useState } from 'react';

function PasswordConfigurator() {

    const [length, setLength] = useState(10);

    const handleSliderChange = (event) => {
        setLength(event.target.value);
    };

    return (
        <div className='configurationContainer'>

            <div className='lengthContainer'>
                <div>Character Length</div>
                <div>10</div>
            </div>

            <input
                type="range"
                min="1"
                max="20"
                value={length}
                className="slider"
                id="characterLengthRange"
                onChange={handleSliderChange}
            />


            <div className='optionsContainer'>
                <div className='option'>
                    <input type="checkbox" id="uppercase" name="uppercase" value="Uppercase"/>
                    <label htmlFor="uppercase"> Include Uppercase Letters</label>
                </div>
                <div className='option'>
                    <input type="checkbox" id="lowercase" name="lowercase" value="Lowercase"/>
                    <label htmlFor="lowercase"> Include Lowercase Letters</label>
                </div>
                <div className='option'>
                    <input type="checkbox" id="numbers" name="numbers" value="Numbers"/>
                    <label htmlFor="numbers"> Include Numbers</label>
                </div>
                <div className='option'>
                    <input type="checkbox" id="symbols" name="symbols" value="Symbols"/>
                    <label htmlFor="symbols"> Include Symbols</label>
                </div>
            </div>


            <div className='strengthContainer'>
                <div id='strengthHeader'>STRENGTH</div>
                <div id='strengthValue'>MEDIUM</div>
                <div className='strengthIndicator'>
                    <div className='strengthBar'></div>
                    <div className='strengthBar'></div>
                    <div className='strengthBar'></div>
                    <div className='strengthBar'></div>
                </div>
            </div>

            <button className='generateButton'>GENERATE →</button>

        </div>
    );
}

export default PasswordConfigurator;
