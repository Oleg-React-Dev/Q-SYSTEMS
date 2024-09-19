import React, { FC } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./styles.css";

interface PositionFilterProps {
  positionTitle: string;
  grade: string;
}

export const PositionFilter: FC<PositionFilterProps> = ({ positionTitle, grade }) => (
  <div className="position-filter-container">
    <div className="position-filter-content-wrapper">
      <div className="position-filter-content">
        <AccountCircleIcon fontSize="small" />
        <span>{positionTitle}</span>
        <HighlightOffIcon fontSize="small" />
      </div>
      <div>{grade}</div>
    </div>
    <div className="position-filter-content-buttons">
      <CloseOutlinedIcon fontSize="small" />
      <ExpandMoreIcon fontSize="small" />
    </div>
  </div>
);
