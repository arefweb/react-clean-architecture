import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";

const Loading = () => {
  return (
    <LoadWrapper>
      <CircularProgress />
    </LoadWrapper>
  );
}

const LoadWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  height: "80px",
  alignItems: "center",
});

export default Loading
