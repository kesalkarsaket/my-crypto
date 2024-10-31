import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";
import { numberWithCommas } from "../CoinsTable";
import { CarouselStyle } from "../../Styles";

const Carousel = () => {
  interface Coin {
    id: string;
    name: string;
    price_change_percentage_24h: number;
    image: string;
    symbol: string;
    current_price: number;
  }
  const [trending, setTrending] = useState<Coin[]>([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <CarouselStyle>
        <Link to={`/`}>
          <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10 }}
          />
          <span>
            {coin?.symbol}
            &nbsp;
            <span
              style={{
                color:
                  coin?.price_change_percentage_24h > 0
                    ? "rgb(14, 203, 129)"
                    : "red",
                fontWeight: 500,
              }}
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>
          <span style={{ fontSize: 22, fontWeight: 500 }}>
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
          </span>
        </Link>
      </CarouselStyle>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <CarouselStyle>
      <div>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          items={items}
          autoPlay
        />
      </div>
    </CarouselStyle>
  );
};

export default Carousel;
