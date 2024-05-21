// Example: Functional Component with Type-Safe Props
import React from 'react';

interface GreetProps {
  name: string;
  age: number;
}

const Greet: React.FC<GreetProps> = ({ name, age }) => {
  return (
    <div>
      <p>{`Hello, ${name} how are you and You are ${age} years old.`}</p>
    </div>
  );
};

export default Greet;
