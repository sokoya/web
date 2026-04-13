import React from 'react';

interface Props {
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ label, onClick }: Props) {
  return (
    <button onClick={onClick} className="p-2 bg-blue-500 text-white rounded">
      {label}
    </button>
  );
}

export default Button;
