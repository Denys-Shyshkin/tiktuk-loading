import Skeleton from "@mui/material/Skeleton";

type Props = {
  videoHeight: number;
};

const SkeletonPostItem = ({ videoHeight }: Props) => {
  return <Skeleton variant="rectangular" width={225} height={videoHeight} />;
};

export default SkeletonPostItem;
