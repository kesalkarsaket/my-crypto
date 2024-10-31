import { CryptoState } from "../CryptoContext";
import Authmodal from "./Authentication/Authmodal";
import UserSidebar from "./Authentication/UserSidebar";
import { strings } from "../utils/constants";
import {
  AppBar,
  Container,
  createTheme,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { TitleStyle } from "../Styles";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    // type: "dark",
  },
});

const Header: React.FC = () => {
  const { currency, setCurrency, user } = CryptoState();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <TitleStyle>
              <Typography variant="h6">Crypto Quest</Typography>
            </TitleStyle>
            <Select
              variant="outlined"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value as string)}
            >
              <MenuItem value={strings.usd}>{strings.usd}</MenuItem>
              <MenuItem value={strings.inr}>{strings.inr}</MenuItem>
            </Select>
            {user ? <UserSidebar /> : <Authmodal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
