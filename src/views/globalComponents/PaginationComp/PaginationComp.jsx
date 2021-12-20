import React from 'react';
import { Pagination } from '@mui/material';
import { styled } from "@mui/system";

const PaginationComp = ({ totalPages, page, handleChange }) => {
  return (
    <PaginWrapper>
      <Pagination count={totalPages} page={page} onChange={handleChange} />
    </PaginWrapper>
  );
};


const PaginWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  height: "80px",
  alignItems: "center",
});

export default PaginationComp
