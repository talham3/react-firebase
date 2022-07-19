import TextField from "@mui/material/TextField";

export default function Input({ onChange, ...rest }) {
  const handleChange = (e) => {
    onchange(e.target.value);
  };

  return (
    <div>
      <TextField variant="outlined" onChange={handleChange} {...rest} />
    </div>
  );
}
