import { Box, Button } from "@mui/material";
import React from "react";
import { FC } from "react";
import { VacancyDescription } from "../vacancyDescription/VacancyDescription";
import { Company } from "../company/Company";

interface VacancyCardProps {
  city: string;
  companyName: string;
  vacancyTitle: string;
  salary: string;
  experience: string;
}

export const VacancyCard: FC<VacancyCardProps> = ({
  city,
  companyName,
  vacancyTitle,
  salary,
  experience,
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      width: "1000px",
      height: "300px",
      background: "#fff",
      borderRadius: "8px",
      justifyContent: "space-between",
      padding: "10px 20px 20px",
    }}
  >
    <VacancyDescription title={vacancyTitle} salary={salary} experience={experience} />

    <Company city={city} name={companyName} />

    <Box
      sx={{
        display: "flex",
        gap: "15px",
      }}
    >
      <Button variant="contained">ОТКЛИКНУТЬСЯ</Button>

      <Button variant="outlined">ПОСМОТРЕТЬ КОНТЕНТ</Button>
    </Box>
  </Box>
);
