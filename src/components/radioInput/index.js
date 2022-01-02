import React from 'react';

import "./styles.scss"

export default function RadioInput({input,labelName, name, checked}) {
    return (
        <label className="rad-label">
            <input {...input}  type="radio" className="rad-input" name={name} />
            <div className="rad-text">{labelName}</div>
        </label>
    )
}
