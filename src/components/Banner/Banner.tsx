// import Carousel from "./Carousel";
// import { useBannerStyles } from "../../Styles";
// import { Container, Typography } from "@mui/material";

// const Banner: React.FC = () => {
//   const classes = useBannerStyles();

//   return (
//     <div className={classes.banner}>
//       <Container className={classes.bannerContent}>
//         <div className={classes.tagline}>
//           <Typography
//             variant="h2"
//             style={{
//               fontWeight: "bold",
//               marginBottom: 15,
//               fontFamily: "Montserrat",
//             }}
//           >
//             Crypto Quest
//           </Typography>
//           <Typography
//             variant="subtitle2"
//             style={{
//               color: "darkgrey",
//               textTransform: "capitalize",
//               fontFamily: "Montserrat",
//             }}
//           >
//             Get all the Info regarding your favorite Crypto Currency
//           </Typography>
//         </div>
//         <Carousel />
//       </Container>
//     </div>
//   );
// };

// export default Banner;

import Carousel from "./Carousel";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  BannerStyle,
  BannerContent,
  Tagline,
  CarouselStyle,
} from "../../Styles";

// const BannerContainer = styled("div")({
//   backgroundImage: "url(./banner2.jpg)",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-around",
// });

// const BannerContent = styled(Container)(({ theme }) => ({
//   height: 400,
//   display: "flex",
//   flexDirection: "column",
//   paddingTop: 25,
//   justifyContent: "space-around",
// }));

// const Tagline = styled("div")({
//   display: "flex",
//   height: "40%",
//   flexDirection: "column",
//   justifyContent: "center",
//   textAlign: "center",
// });

const Banner: React.FC = () => {
  return (
    <BannerStyle>
      <BannerContent>
        <Tagline>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Quest
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </Tagline>
        <CarouselStyle />
      </BannerContent>
    </BannerStyle>
  );
};

export default Banner;
