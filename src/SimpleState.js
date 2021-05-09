import React, { useState } from 'react'

function SimpleState() {
    const [cuenta, setCuenta] = useState(0);

    return (
        <div>
            La cuenta es: {cuenta}
            <button onClick={() => setCuenta(cuenta + 1)}>
                Aumentar cuenta
            </button>
        </div>
    )
}

export default SimpleState;
