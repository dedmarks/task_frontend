import React from 'react';

interface Props {
    msg: string;
}

const Error: React.FC<Props> = ({ msg }) => {
  return (
    <div className='error'>
      <p>An error occurred: {msg}</p>
    </div>
  );
};

export default Error;
