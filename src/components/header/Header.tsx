import React, { FC } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

interface HeaderProps {
  text: string;
  icon?: JSX.Element;
}

export const Header: FC<HeaderProps> = ({ text, icon }) => (
  <AppBar position="static" sx={{ backgroundColor: "lightgray", paddingLeft: "55px", paddingRight: "55px" }}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "black" }}>
        {text}
      </Typography>

      {icon}
    </Toolbar>
  </AppBar>
);
