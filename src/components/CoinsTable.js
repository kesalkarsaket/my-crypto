import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFavorites, saveFavorites } from "../utils/useLocalStorage";
import { CryptoState } from "../CryptoContext";
import ShimmerUI from "./Shimmer";
import { strings } from "../utils/constants";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Button,
  Container,
  Grow,
  LinearProgress,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { PaginationStyles, Row } from "../Styles";
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default function CoinsTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState(getFavorites());
  const [animateId, setAnimateId] = useState(null);

  const { coins, loading, fetchCoins, wsPrices, setWsPrices } = CryptoState();

  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  useEffect(() => {
    fetchCoins();
  }, []);

  useEffect(() => {
    if (coins.length > 0) {
      const assetIds = coins.map((coin) => coin.id).join(",");
      const ws = new WebSocket(`wss://ws.coincap.io/prices?assets=${assetIds}`);

      ws.onmessage = (event) => {
        const updatedPrices = JSON.parse(event.data);
        setWsPrices((prevPrices) => ({
          ...prevPrices,
          ...updatedPrices,
        }));
      };

      ws.onerror = (error) => {
        console.error("WebSocket error: ", error);
      };

      return () => ws.close();
    }
  }, [coins, fetchCoins, setWsPrices]);

  const handleSearch = () => {
    if (!Array.isArray(coins)) return [];
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  };

  const coinsWithUpdatedPrices = handleSearch().map((coin) => {
    const updatedPrice = wsPrices[coin.id] ? wsPrices[coin.id] : coin.priceUsd;
    return {
      ...coin,
      priceUsd: updatedPrice,
    };
  });

  const handleFavoriteToggle = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((fav) => fav !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);

    setAnimateId(id);

    setTimeout(() => {
      setAnimateId(null);
    }, 300);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label={strings.searchForCryto}
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {loading ? (
            <>
              <LinearProgress style={{ backgroundColor: "gold" }} />
              <ShimmerUI />
            </>
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                <TableRow>
                  {[
                    strings.symbol,
                    strings.name,
                    strings.priceInUsd,
                    strings.hourChange,
                    strings.marketcap,
                    strings.favStatus,
                  ].map((head) => (
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "700",
                        fontFamily: "Montserrat",
                      }}
                      key={head}
                      align={head === strings.symbol ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {coinsWithUpdatedPrices
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.changePercent24Hr > 0;
                    return (
                      <Row>
                        <TableRow key={row.id}>
                          <TableCell
                            onClick={() =>
                              navigate(`/coins/${row?.id}`, {
                                state: { coinData: row },
                              })
                            }
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                          </TableCell>
                          <TableCell
                            align="right"
                            onClick={() =>
                              navigate(`/coins/${row?.id}`, {
                                state: { coinData: row },
                              })
                            }
                          >
                            <span style={{ color: "darkgrey" }}>
                              {row.name}
                            </span>
                          </TableCell>
                          <TableCell align="right">
                            $
                            {numberWithCommas(
                              parseFloat(row.priceUsd).toFixed(2)
                            )}
                          </TableCell>
                          <TableCell
                            align="right"
                            style={{
                              color: profit ? "rgb(14, 203, 129)" : "red",
                              fontWeight: 500,
                            }}
                          >
                            {profit && "+"}
                            {parseFloat(row.changePercent24Hr).toFixed(2)}%
                          </TableCell>
                          <TableCell align="right">
                            $
                            {numberWithCommas(
                              parseFloat(row.marketCapUsd).toFixed(2)
                            )}
                          </TableCell>
                          <TableCell align="right">
                            <Button
                              onClick={() => handleFavoriteToggle(row.id)}
                            >
                              {/* Show filled icon if favorite, otherwise show outlined icon */}
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                }}
                              >
                                {favorites.includes(row.id) ? (
                                  <Grow
                                    in={animateId === row.id}
                                    timeout={{ enter: 0, exit: 300 }}
                                  >
                                    <Favorite
                                      style={{
                                        color: "gold",
                                        position: "absolute",
                                        top: 0,
                                      }}
                                    />
                                  </Grow>
                                ) : (
                                  <Grow
                                    in={animateId === row.id}
                                    timeout={{ enter: 0, exit: 300 }}
                                  >
                                    <FavoriteBorderOutlined
                                      style={{
                                        color: "white",
                                        position: "absolute",
                                        top: 0,
                                      }}
                                    />
                                  </Grow>
                                )}
                                {/* Always show the other icon */}
                                {favorites.includes(row.id) ? (
                                  <Favorite
                                    style={{ color: "gold", opacity: 0.5 }}
                                  />
                                ) : (
                                  <FavoriteBorderOutlined
                                    style={{ color: "white", opacity: 0.5 }}
                                  />
                                )}
                              </div>
                            </Button>
                          </TableCell>
                        </TableRow>
                      </Row>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <PaginationStyles>
          <Pagination
            count={Math.ceil(handleSearch().length / 10)}
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, 450);
            }}
          />
        </PaginationStyles>
      </Container>
    </ThemeProvider>
  );
}
