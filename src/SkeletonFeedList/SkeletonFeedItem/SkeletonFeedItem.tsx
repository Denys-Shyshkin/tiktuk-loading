import Skeleton from "@mui/material/Skeleton";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  StyledStack,
  AvatarSkeleton,
  TextSkeleton,
  StyledDiv,
  StyledSection,
  IconSkeleton,
} from "./styles";

type Props = {
  mediaQuery: string;
  videoHeight: number;
};

const SkeletonFeedItem = ({ mediaQuery, videoHeight }: Props) => {
  const matches = useMediaQuery(mediaQuery);

  return (
    <StyledStack spacing={1}>
      <AvatarSkeleton variant="circular" width={40} height={40} />
      <div>
        <Skeleton variant="text" width={50} height={28} />
        <Skeleton variant="text" width={250} height={20} />
        <TextSkeleton variant="text" width={200} height={16} />
        <StyledDiv isMobile={matches}>
          <Skeleton variant="rectangular" width={225} height={videoHeight} />
          <StyledSection isMobile={matches}>
            <IconSkeleton variant="circular" width={48} height={48} />
            <IconSkeleton variant="circular" width={48} height={48} />
          </StyledSection>
        </StyledDiv>
      </div>
    </StyledStack>
  );
};

export default SkeletonFeedItem;
