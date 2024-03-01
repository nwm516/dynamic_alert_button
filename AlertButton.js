import React from 'react';

const AlertButton = ({ message, children}) => {
    
    const handleClick = () => {
        let alertMessage = 'No Provided Message';

        if (message) {
            alertMessage = message;
        }

        alert(alertMessage);
    };

    return (
        <div>
            <button onClick={handleClick}>
                { children || 'GENERIC BUTTON' }
            </button>
        </div>
    )
};

export default AlertButton;