import { Skeleton } from "@mui/material";
import { Shimmer, ShimmerItem } from "../Styles";

const ShimmerUI = () => {
  return (
    <Shimmer>
      <div>
        {Array.from(new Array(10)).map((_, index) => (
          <ShimmerItem>
            <Skeleton
              key={index}
              variant="rectangular"
              animation="wave"
              width="100%"
              height={50}
              color="lightgray"
            />
          </ShimmerItem>
        ))}
      </div>
    </Shimmer>
  );
};

export default ShimmerUI;
