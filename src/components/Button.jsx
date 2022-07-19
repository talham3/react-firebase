import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

export default function MyButton({ loading, onClick, children }) {
  return (
    <Button variant="outlined" onClick={loading ? null : onClick}>
      {children}
      {loading && <CircularProgress color="secondary" />}
    </Button>
  );
}
