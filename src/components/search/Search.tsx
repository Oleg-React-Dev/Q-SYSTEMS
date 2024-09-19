import React, { FC } from "react";
import { Box, Button } from "@mui/material";

interface SearchProps extends React.PropsWithChildren {
  label?: string;
}

export const Search: FC<SearchProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "50px",
        background: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      <Box>{children}</Box>

      <Button
        variant="contained"
        sx={{
          width: "60px",
        }}
      >
        Поиск
      </Button>
    </Box>
  );
};
