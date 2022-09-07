import { AlertTitle, Alert } from "@mui/material";
import { firstLetterUpper } from "src/utils";

const InfoAlert = ({ message, severity }) => (
  <Alert severity={severity}>
    <AlertTitle>{`${firstLetterUpper(severity)}`}</AlertTitle>
    {message}
  </Alert>
);

export default InfoAlert;
