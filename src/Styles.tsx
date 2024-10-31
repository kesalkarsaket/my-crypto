// import { Theme } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// interface SelectButtonProps {
//   children: React.ReactNode;
//   selected: boolean;
//   onClick: () => void;
// }

// export const useBannerStyles = makeStyles((theme) => ({
//   banner: {
//     backgroundImage: "url(./banner2.jpg)",
//   },
//   bannerContent: {
//     height: 400,
//     display: "flex",
//     flexDirection: "column",
//     paddingTop: 25,
//     justifyContent: "space-around",
//   },
//   tagline: {
//     display: "flex",
//     height: "40%",
//     flexDirection: "column",
//     justifyContent: "center",
//     textAlign: "center",
//   },
//   carousel: {
//     height: "50%",
//     display: "flex",
//     alignItems: "center",
//   },
// }));

// export const useCarouselStyles = makeStyles((theme) => ({
//   carousel: {
//     height: "50%",
//     display: "flex",
//     alignItems: "center",
//   },
//   carouselItem: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     cursor: "pointer",
//     textTransform: "uppercase",
//     color: "white",
//   },
// }));
// export const useCoinInfoStyles = makeStyles((theme: Theme) => ({
//   container: {
//     width: "75%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 25,
//     padding: 40,
//     // [theme.breakpoints.down("md")]: {
//     //   width: "100%",
//     //   marginTop: 0,
//     //   padding: 20,
//     //   paddingTop: 0,
//     // },
//   },
// }));

// export const useHeaderStyles = makeStyles((theme: Theme) => ({
//   title: {
//     flex: 1,
//     color: "gold",
//     fontFamily: "Montserrat",
//     fontWeight: "bold",
//     cursor: "pointer",
//   },
// }));
// export const useSelectButtonStyles = makeStyles((theme: Theme) => ({
//   selectButton: {
//     border: "1px solid gold",
//     borderRadius: 5,
//     padding: 10,
//     paddingLeft: 20,
//     paddingRight: 20,
//     fontFamily: "Montserrat",
//     cursor: "pointer",
//     backgroundColor: (props: SelectButtonProps) =>
//       props.selected ? "gold" : "",
//     color: (props: SelectButtonProps) => (props.selected ? "black" : ""),
//     fontWeight: (props: SelectButtonProps) => (props.selected ? 700 : 500),
//     "&:hover": {
//       backgroundColor: "gold",
//       color: "black",
//     },
//     width: "22%",
//     textAlign: "center",
//   },
// }));

// export const useShimmerStyles = makeStyles((theme: Theme) => ({
//   shimmer: {
//     display: "flex",
//     flexDirection: "column",
//     marginBottom: "1rem",
//   },
//   shimmerItem: {
//     marginBottom: "0.5rem",
//   },
// }));

// export const useCoinTableStyles = makeStyles((theme: Theme) => ({
//   row: {
//     backgroundColor: "#16171a",
//     cursor: "pointer",
//     "&:hover": {
//       backgroundColor: "#131111",
//     },
//     fontFamily: "Montserrat",
//   },
//   pagination: {
//     "& .MuiPaginationItem-root": {
//       color: "gold",
//     },
//   },
// }));

// export const useCoinPageStyles = makeStyles((theme: Theme) => ({
//   container: {
//     display: "flex",
//     // [theme.breakpoints.down("md")]: {
//     //   flexDirection: "column",
//     //   alignItems: "center",
//     // },
//   },
//   sidebar: {
//     width: "30%",
//     // [theme.breakpoints.down("md")]: {
//     //   width: "100%",
//     // },
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginTop: 25,
//     borderRight: "2px solid grey",
//   },
//   heading: {
//     fontWeight: "bold",
//     marginBottom: 20,
//     fontFamily: "Montserrat",
//   },
//   description: {
//     width: "100%",
//     fontFamily: "Montserrat",
//     padding: 25,
//     paddingBottom: 15,
//     paddingTop: 0,
//     textAlign: "justify",
//   },
//   marketData: {
//     alignSelf: "start",
//     padding: 25,
//     paddingTop: 10,
//     width: "100%",
//     // [theme.breakpoints.down("md")]: {
//     //   display: "flex",
//     //   justifyContent: "space-around",
//     // },
//     // [theme.breakpoints.down("sm")]: {
//     //   flexDirection: "column",
//     //   alignItems: "center",
//     // },
//     // [theme.breakpoints.down("xs")]: {
//     //   alignItems: "start",
//     // },
//   },
// }));

// export const useAppStyles = makeStyles({
//   App: {
//     backgroundColor: "#14161a",
//     color: "white",
//     minHeight: "100vh",
//   },
// });

// export const useAuthModalStyles = makeStyles((theme: Theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paper: {
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     color: "white",
//     borderRadius: 10,
//   },
//   google: {
//     padding: 24,
//     paddingTop: 0,
//     display: "flex",
//     flexDirection: "column",
//     textAlign: "center",
//     gap: 20,
//     fontSize: 20,
//   },
// }));

// export const useSidebarStyles = makeStyles({
//   container: {
//     width: 350,
//     padding: 25,
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//     fontFamily: "monospace",
//   },
//   profile: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "20px",
//     height: "92%",
//   },
//   logout: {
//     height: "8%",
//     width: "100%",
//     backgroundColor: "#EEBC1D",
//     marginTop: 20,
//   },
//   picture: {
//     width: 200,
//     height: 200,
//     cursor: "pointer",
//     backgroundColor: "#EEBC1D",
//     objectFit: "contain",
//   },
//   watchlist: {
//     flex: 1,
//     width: "100%",
//     backgroundColor: "grey",
//     borderRadius: 10,
//     padding: 15,
//     paddingTop: 10,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 12,
//     overflowY: "scroll",
//   },
//   coin: {
//     padding: 10,
//     borderRadius: 5,
//     color: "black",
//     width: "100%",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#EEBC1D",
//     boxShadow: "0 0 3px black",
//   },
// });

import { styled } from "@mui/material/styles";
interface SelectButtonProps {
  selected: boolean;
}
//usebannerstyles
export const BannerStyle = styled("div")({
  backgroundImage: "url(./banner2.jpg)",
});

export const BannerContent = styled("div")({
  height: 400,
  display: "flex",
  flexDirection: "column",
  paddingTop: 25,
  justifyContent: "space-around",
});

export const Tagline = styled("div")({
  display: "flex",
  height: "40%",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
});

export const CarouselStyle = styled("div")({
  height: "50%",
  display: "flex",
  alignItems: "center",
});

// usecariuselstyles
export const carouselItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  color: "white",
});

//useCoinInfoStyles

export const ContainerInfo = styled("div")(({ theme }) => ({
  width: "75%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 25,
  padding: 40,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: 0,
    padding: 20,
    paddingTop: 0,
  },
}));

//useHeaderStyles

export const TitleStyle = styled("div")({
  flex: 1,
  color: "gold",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  cursor: "pointer",
});

//useSelectbuttonstyles

export const SelectButtonStyling = styled("div", {
  shouldForwardProp: (prop) => prop !== "selected",
})<SelectButtonProps>(({ selected }) => ({
  border: "1px solid gold",
  borderRadius: 5,
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
  fontFamily: "Montserrat",
  cursor: "pointer",
  backgroundColor: selected ? "gold" : "",
  color: selected ? "black" : "",
  fontWeight: selected ? 700 : 500,
  "&:hover": {
    backgroundColor: "gold",
    color: "black",
  },
  width: "22%",
  textAlign: "center",
}));

//useshimmerstyles

export const Shimmer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginBottom: "1rem",
});

export const ShimmerItem = styled("div")({
  marginBottom: "0.5rem",
});

//useCointablestyles
export const Row = styled("div")({
  backgroundColor: "#16171a",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#131111",
  },
  fontFamily: "Montserrat",
});

export const PaginationStyles = styled("div")({
  "& .MuiPaginationItem-root": {
    color: "gold",
  },
});

//  useCoinPageStyles
export const ContainerNew = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));
export const SidebarStyle = styled("div")(({ theme }) => ({
  width: "30%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 25,
  borderRight: "2px solid grey",
}));
export const HeadingStyle = styled("div")({
  fontWeight: "bold",
  marginBottom: 20,
  fontFamily: "Montserrat",
});
export const DescriptionStyle = styled("div")({
  width: "100%",
  fontFamily: "Montserrat",
  padding: 25,
  paddingBottom: 15,
  paddingTop: 0,
  textAlign: "justify",
});
export const MarketDataStyle = styled("div")(({ theme }) => ({
  alignSelf: "start",
  padding: 25,
  paddingTop: 10,
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "space-around",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("xs")]: {
    alignItems: "start",
  },
}));
//useappstyles
export const AppStyles = styled("div")({
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
});

// useAuthModalStyles
export const ModalStyle = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
export const PaperStyle = styled("div")(({ theme }) => ({
  width: 400,
  backgroundColor: theme.palette.background.paper,
  color: "white",
  borderRadius: 10,
}));
export const GoogleStyle = styled("div")({
  padding: 24,
  paddingTop: 0,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  gap: 20,
  fontSize: 20,
});

//usesidebar
export const ContainerStyle = styled("div")({
  width: 350,
  padding: 25,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  fontFamily: "monospace",
});
export const ProfileStyle = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  height: "92%",
});
export const LogoutStyle = styled("div")({
  height: "8%",
  width: "100%",
  backgroundColor: "#EEBC1D",
  marginTop: 20,
});
export const PictureStyle = styled("div")({
  width: 200,
  height: 200,
  cursor: "pointer",
  backgroundColor: "#EEBC1D",
  objectFit: "contain",
});
export const WatchlistStyle = styled("div")({
  flex: 1,
  width: "100%",
  backgroundColor: "grey",
  borderRadius: 10,
  padding: 15,
  paddingTop: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 12,
  overflowY: "scroll",
});
export const CoinStyle = styled("div")({
  padding: 10,
  borderRadius: 5,
  color: "black",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#EEBC1D",
  boxShadow: "0 0 3px black",
});
// });

// Usage in components
// export default function StyledComponents() {
//   return (
//     <Banner>
//       <BannerContent>
//         <Tagline>Banner Tagline</Tagline>
//         <Carousel>Carousel Content</Carousel>
//       </BannerContent>
//     </Banner>
//   );
// }
