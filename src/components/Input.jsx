import React from "react";

export default function Input({ onChange, ...rest }) {
  const handleChange = (e) => {
    onchange(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} {...rest} />
    </div>
  );
}
