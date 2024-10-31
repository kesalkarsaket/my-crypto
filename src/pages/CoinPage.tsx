import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CoinInfo from "../components/CoinInfo";
import { coinCapApi } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { strings } from "../utils/constants";
import { Button, LinearProgress, Typography } from "@mui/material";
import {
  ContainerNew,
  HeadingStyle,
  MarketDataStyle,
  SidebarStyle,
} from "../Styles";

interface CoinDetail {
  id: string;
  name: string;
  rank: number;
  priceUsd: string;
  marketCapUsd: string;
}

const CoinPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [coinDetail, setCoinDetail] = useState<CoinDetail | undefined>(
    location.state?.coinData
  );
  const { symbol, user, watchlist, setAlert, wsPrices, setWsPrices, coins } =
    CryptoState();

  const fetchCoinDetail = useCallback(async () => {
    const { data } = await axios.get(coinCapApi(id!));
    setCoinDetail(data.data);
  }, [id]);

  useEffect(() => {
    if (!coinDetail) {
      fetchCoinDetail();
    }
  }, [coinDetail, fetchCoinDetail]);

  useEffect(() => {
    if (coinDetail?.id) {
      const ws = new WebSocket(
        `wss://ws.coincap.io/prices?assets=${coinDetail?.id}`
      );
      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message && message[coinDetail?.id]) {
          setWsPrices((prevPrices) => ({
            ...prevPrices,
            [coinDetail.id]: message[coinDetail?.id],
          }));
        }
      };

      return () => ws.close();
    }
  }, [coinDetail, coins, setWsPrices]);

  const inWatchlist = coinDetail ? watchlist.includes(coinDetail.id) : false;

  const addToWatchlist = async () => {
    if (!coinDetail || !user) return;
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        {
          coins: watchlist ? [...watchlist, coinDetail.id] : [coinDetail.id],
        },
        { merge: true }
      );
      setAlert({
        open: true,
        message: `${coinDetail.name} ${strings.addedToWatchlist}`,
        type: "success",
      });
    } catch (error: any) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  const removeFromWatchlist = async () => {
    if (!coinDetail || !user) return;
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter((wish) => wish !== coinDetail.id) },
        { merge: true }
      );
      setAlert({
        open: true,
        message: `${coinDetail.name}${strings.removeFromWatchlist}`,
        type: "success",
      });
    } catch (error: any) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  if (!coinDetail)
    return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <ContainerNew>
      <div>
        <SidebarStyle>
          <div>
            <HeadingStyle>
              <Typography variant="h3">{coinDetail.name}</Typography>
            </HeadingStyle>
            <MarketDataStyle>
              <div>
                <span style={{ display: "flex" }}>
                  <HeadingStyle>
                    <Typography variant="h5">
                      Rank: {coinDetail.rank}
                    </Typography>
                  </HeadingStyle>
                </span>

                <span style={{ display: "flex" }}>
                  <HeadingStyle>
                    <Typography variant="h5">
                      Current Price: {symbol}{" "}
                      {wsPrices[`${coinDetail?.id}`] != null
                        ? wsPrices[`${coinDetail?.id}`].toString()
                        : "0.00"}{" "}
                    </Typography>
                  </HeadingStyle>
                </span>

                <span style={{ display: "flex" }}>
                  <HeadingStyle>
                    <Typography variant="h5">
                      Market Cap: {symbol}{" "}
                      {(parseFloat(coinDetail.marketCapUsd) / 1e6).toFixed(2)} M
                    </Typography>
                  </HeadingStyle>
                </span>

                {user && (
                  <Button
                    variant="outlined"
                    style={{
                      width: "85%",
                      height: 40,
                      backgroundColor: inWatchlist ? "#ff0000" : "#EEBC1D",
                    }}
                    onClick={inWatchlist ? removeFromWatchlist : addToWatchlist}
                  >
                    {inWatchlist
                      ? `${strings.removeFromWatchlist}`
                      : `${strings.addedToWatchlist}`}
                  </Button>
                )}
              </div>
            </MarketDataStyle>
          </div>
        </SidebarStyle>
        <CoinInfo coin={coinDetail} />
      </div>
    </ContainerNew>
  );
};

export default CoinPage;
