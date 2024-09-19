import { Box } from "@mui/material";
import React, { FC } from "react";

import "./styles.css";

interface VacancyDescriptionProps {
  title: string;
  salary: string;
  experience: string;
}

export const VacancyDescription: FC<VacancyDescriptionProps> = ({ title, salary, experience }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <span className="vacancy-title">{title}</span>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {salary}

        <Box
          sx={{
            width: "125px",
            height: "30px",
            background: "#c1eaf0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {experience}
        </Box>
      </Box>
    </Box>
  );
};
