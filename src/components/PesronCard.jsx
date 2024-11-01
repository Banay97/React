import React, { useState } from 'react';
import './PersonCard.css';

function PersonCard({ firstName, lastName, initialAge, hairColor }) {
  const [text, setText] = useState('');
  const [age, setAge] = useState(initialAge); 

  const incrementAge = () => {
    const newAge = age + 1;
    setAge(newAge);
    alert(`Happy birthday ${firstName} ${lastName}! Your age now is ${newAge}.`);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`You typed: ${text}`);
      setText('');
    }
  };

  return (
    <div className="person-card">
      <h1>{lastName}, {firstName}</h1>
      <p>Age: {age}</p>
      <p>Hair color: {hairColor}</p>
      <div>
        <button onClick={incrementAge}>
          Birthday button for {firstName} {lastName}
        </button>
     
      </div>
    </div>
  );
}

export default PersonCard;
