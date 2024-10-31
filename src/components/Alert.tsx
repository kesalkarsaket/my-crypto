import { CryptoState } from "../CryptoContext";

const Alert: React.FC = () => {
  const { alert, setAlert } = CryptoState();

  const handleCloseAlert = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") return;
    setAlert({ open: false, message: "", type: "info" });
  };

  return (
    <div></div>
    // <Snackbar
    //   open={alert.open}
    //   autoHideDuration={3000}
    //   // onClose={handleCloseAlert}
    // >
    //   <Alert
    //     onClose={handleCloseAlert}
    //     elevation={10}
    //     variant="filled"
    //     severity={alert.type}
    //   >
    //     {alert.message}
    //   </Alert>
    // </Snackbar>
  );
};

export default Alert;
