import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import Alert from "./components/Alert";
import { AppStyles } from "./Styles";

function App(): JSX.Element {
  return (
    <AppStyles>
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/coins/:id" element={<CoinPage />} />
          </Routes>
          <Alert />
        </BrowserRouter>
      </div>
    </AppStyles>
  );
}

export default App;
