import { useState } from "react";
import { CryptoState } from "../../CryptoContext";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { strings } from "../../utils/constants";
import { Box, Button, TextField } from "@mui/material";

interface LoginProps {
  handleClose: () => void;
}

const Login: React.FC<LoginProps> = ({ handleClose }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setAlert } = CryptoState();

  const handleSubmit = async () => {
    if (!email || !password) {
      setAlert({
        open: true,
        message: strings.fillAllFields,
        type: "error",
      });
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: `${strings.signinSuccess} ${result.user.email}`,
        type: "success",
      });
      handleClose();
    } catch (error: any) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label={strings.enterEmail}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label={strings.enterPass}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        style={{ backgroundColor: "#EEBC1D" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
