import React from 'react';

interface NumbersProps {
  number: number,
}

const Numbers: React.FC<NumbersProps> = props => {
  return (
    <div className="numbers-balls">
      <div className='number'>{props.number}</div>
    </div>
  );
};

export default Numbers;