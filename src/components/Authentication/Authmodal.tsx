import Signup from "./Signup";
import Login from "./Login";
import { useState } from "react";
import { CryptoState } from "../../CryptoContext";
import { auth } from "../../firebase";
import GoogleButton from "react-google-button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { strings } from "../../utils/constants";
import {
  AppBar,
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Tab,
  Tabs,
} from "@mui/material";
import { GoogleStyle, ModalStyle, PaperStyle } from "../../Styles";

export default function Authmodal() {
  const [open, setOpen] = useState<boolean>(false);

  const { setAlert } = CryptoState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAlert({
          open: true,
          message: `${strings.signupSuccess} ${res.user?.email}`,
          type: "success",
        });
        handleClose();
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        });
      });
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{
          width: 85,
          height: 40,
          marginLeft: 15,
          backgroundColor: "#EEBC1D",
        }}
        onClick={handleOpen}
      >
        Login
      </Button>
      <ModalStyle>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <PaperStyle>
              <div>
                <AppBar
                  position="static"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    style={{ borderRadius: 10 }}
                  >
                    <Tab label={strings.login} />
                    <Tab label={strings.signup} />
                  </Tabs>
                </AppBar>
                {value === 0 && <Login handleClose={handleClose} />}
                {value === 1 && <Signup handleClose={handleClose} />}
                <GoogleStyle>
                  <Box>
                    <span>OR</span>
                    <GoogleButton
                      style={{ width: "100%", outline: "none" }}
                      onClick={signInWithGoogle}
                    />
                  </Box>
                </GoogleStyle>
              </div>
            </PaperStyle>
          </Fade>
        </Modal>
      </ModalStyle>
    </div>
  );
}
