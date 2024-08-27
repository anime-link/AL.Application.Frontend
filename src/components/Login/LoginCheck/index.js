import "./styles.css";
import React, { useState } from 'react';

export function CampoCheck() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };

    return(
        <div className="checklist">
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            Lembrar usuário e senha
          </label>
        </div>
    );
}

