import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

import SkeletonFeedItem from "./SkeletonFeedItem";
import { StyledGridContainer } from "./styles";

type Props = {
  postsPerPage: number;
  mediaQuery?: string;
  videoHeight?: number;
};

const SkeletonFeedList = ({
  postsPerPage,
  mediaQuery = "(max-width:600px)",
  videoHeight = 400,
}: Props) => {
  const matches = useMediaQuery(mediaQuery);

  const skeletonArray = Array(postsPerPage).fill(
    <SkeletonFeedItem mediaQuery={mediaQuery} videoHeight={videoHeight} />
  );

  return (
    <StyledGridContainer isMobile={matches} container spacing={6}>
      {skeletonArray.map((seketonItem, index) => {
        return (
          <Grid key={index} item xs={12}>
            {seketonItem}
          </Grid>
        );
      })}
    </StyledGridContainer>
  );
};

export default SkeletonFeedList;
