import "./styles.css";
import React, { useState } from 'react';

export function CampoCheck({ manterConectado }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };

    return(
        <div className="login-checklist">
          <label className="login-check">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className="login-checkbox"></span>
            <span>Manter conectado</span>
          </label>
        </div>
    );
}

