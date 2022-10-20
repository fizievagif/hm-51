import React from 'react';

interface NumbersProps {
  number: number,
}

const Numbers: React.FC<NumbersProps> = props => {
  return (
    <div className="numbers-balls">
      <p>{props.number}</p>
    </div>
  );
};

export default Numbers;