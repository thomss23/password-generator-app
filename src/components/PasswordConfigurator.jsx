import '../styles/PasswordConfigurator.css';
import { useState } from 'react';

function PasswordConfigurator() {

    const [length, setLength] = useState(10);
    const [checkboxes, setCheckboxes] = useState([
        { id: 'uppercase', name: 'Uppercase', checked: false, label: 'Include Uppercase Letters' },
        { id: 'lowercase', name: 'Lowercase', checked: false, label: 'Include Lowercase Letters' },
        { id: 'numbers', name: 'Numbers', checked: false, label: 'Include Numbers' },
        { id: 'symbols', name: 'Symbols', checked: false, label: 'Include Symbols' },
    ]);
    const [checkboxesSelected, setCheckboxesSelected] = useState(0);
    // const [strengthIndicator, setStrengthIndicator] = useState('');

    const handleSliderChange = (event) => {
        setLength(event.target.value);
    };

    const handleCheckboxChange = (id) => {
        setCheckboxes((prevState) => {
          const newCheckboxes = prevState.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
          );
    
          const selectedCount = newCheckboxes.filter((checkbox) => checkbox.checked).length;
          setCheckboxesSelected(selectedCount);
          
          console.log(checkboxesSelected);
          return newCheckboxes;
        });
    };
    
    return (
        <div className='configurationContainer'>

            <div className='lengthContainer'>
                <div>Character Length</div>
                <div id='length'>{length}</div>
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
                {checkboxes.map((checkbox) => (
                    <div className='option' key={checkbox.id}>
                        <input
                            type="checkbox"
                            id={checkbox.id}
                            name={checkbox.name}
                            value={checkbox.name}
                            checked={checkbox.checked}
                            onChange={() => handleCheckboxChange(checkbox.id)}
                        />
                        <label htmlFor={checkbox.id}> {checkbox.label}</label>

                    </div>
                ))}
            </div>

            <div className='strengthContainer'>
                <div id='strengthHeader'>STRENGTH</div>
                <div id='strengthValue'>MEDIUM</div>
                <div className='strengthIndicator'>
                    <div className='strengthBarEmpty'></div>
                    <div className='strengthBarFilled'></div>
                    <div className='strengthBarFilled'></div>
                    <div className='strengthBarFilled'></div>
                </div>
            </div>

            <button className='generateButton'>GENERATE →</button>

        </div>
    );
}

export default PasswordConfigurator;
