import { Box } from "@mui/material";
import React from "react";
import { FC } from "react";

interface CompanyProps {
  name: string;
  city: string;
}

export const Company: FC<CompanyProps> = ({ city, name }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    }}
  >
    <div>{city}</div>
    <div>{name}</div>
  </Box>
);
