import React from 'react';
import AlertButton from './AlertButton';

const DynamicToolbar = () => {

    const buttons = [
        {message: "Now rendering simulation...", children: "START SIMULATION"},
        {message: "ERROR: Simulation cannot be halted.", children: "PAUSE SIMULATION"},
        {message: "Now terminating simulation.", children: "END SIMULATION"}
    ];

    return (
        <div>
           {buttons.map((button, buttonIndex) => (

            /* Added this div portion below for some breathing room for the buttons */
            
                <div key={buttonIndex} style={{ marginTop: '15px', marginBottom: '10px'}}>
                    <AlertButton key={buttonIndex} message={button.message} children={button.children} />
                </div>
           ))}
        </div>
    );
};

export default DynamicToolbar;