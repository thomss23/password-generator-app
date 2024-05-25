import '../styles/PasswordConfigurator.css';
import { useEffect, useState } from 'react';

function PasswordConfigurator() {
    const [length, setLength] = useState(10);
    const [checkboxes, setCheckboxes] = useState([
        { id: 'uppercase', name: 'Uppercase', checked: false, label: 'Include Uppercase Letters' },
        { id: 'lowercase', name: 'Lowercase', checked: false, label: 'Include Lowercase Letters' },
        { id: 'numbers', name: 'Numbers', checked: false, label: 'Include Numbers' },
        { id: 'symbols', name: 'Symbols', checked: false, label: 'Include Symbols' },
    ]);
    const [strengthIndicator, setStrengthIndicator] = useState({ strength: '', color: '' });
    const [strengthBars, setStrengthBars] = useState([
        { id: 0, state: false },
        { id: 1, state: false },
        { id: 2, state: false },
        { id: 3, state: false },
    ]);

    useEffect(() => {
        const count = checkboxes.filter((checkbox) => checkbox.checked).length;

        switch (count) {
            case 0:
                setStrengthIndicator({ strength: '', color: '' });
                break;
            case 1:
                setStrengthIndicator({ strength: 'TOO WEAK!', color: '#F64A4A' });
                break;
            case 2:
                setStrengthIndicator({ strength: 'WEAK', color: '#FB7C58' });
                break;
            case 3:
                setStrengthIndicator({ strength: 'MEDIUM', color: '#F8CD65' });
                break;
            case 4:
                setStrengthIndicator({ strength: 'STRONG', color: '#A4FFAF' });
                break;
            default:
                break;
        }
    }, [checkboxes]);

    useEffect(() => {
        const strengthLevels = {
            'TOO WEAK!': 1,
            'WEAK': 2,
            'MEDIUM': 3,
            'STRONG': 4,
        };

        const updatedBars = strengthBars.map((bar, index) => ({
            ...bar,
            state: strengthIndicator.strength && index < (strengthLevels[strengthIndicator.strength] || 0),
        }));

        setStrengthBars(updatedBars);
    }, [strengthIndicator, strengthBars]);

    const handleSliderChange = (event) => {
        setLength(event.target.value);
    };

    const handleCheckboxChange = (id) => {
        setCheckboxes((prevState) => {
            const newCheckboxes = prevState.map((checkbox) =>
                checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
            );
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
                        <label htmlFor={checkbox.id}>{checkbox.label}</label>
                    </div>
                ))}
            </div>

            <div className='strengthContainer'>
                <div id='strengthHeader'>STRENGTH</div>
                <div id='strengthValue'>
                    {strengthIndicator.strength}
                </div>
                <div className='strengthIndicator'>
                    {strengthBars.map(bar => (
                        <div
                            key={bar.id}
                            className={bar.state ? 'strengthBarFilled' : 'strengthBarEmpty'}
                            style={{ backgroundColor: bar.state ? strengthIndicator.color : '' }}
                        ></div>
                    ))}
                </div>
            </div>

            <button className='generateButton'>GENERATE →</button>
        </div>
    );
}

export default PasswordConfigurator;

