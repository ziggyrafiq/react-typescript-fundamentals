// Example: Handling Events with Type-Safe Callbacks
import React, { useState } from 'react';

interface ButtonProps {
  onClick: () => void;
}

const MyButton: React.FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Click me</button>;
};

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <MyButton onClick={handleClick} />
    </div>
  );
};

export default App;
