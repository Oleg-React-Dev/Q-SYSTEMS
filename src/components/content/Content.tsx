import React from "react";
import { Box, Button } from "@mui/material";
import { VacanciesList } from "../vacanciesList/VacanciesList";
import { Border } from "../border/Border";
import { PositionFilter } from "../positionFilter/PositionFilter";
import { CityFilter } from "../cityFilter/CityFilter";
import { Search } from "../search/Search";

export const Content: React.FC = () => (
  <Box sx={{ display: "flex", flexDirection: "row", height: "90vh" }}>
    <Box
      sx={{
        flex: "0 0 30%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Button
        variant="contained"
        sx={{
          width: "130px",
        }}
      >
        Вакансии
      </Button>
      <Button
        variant="contained"
        sx={{
          width: "130px",
        }}
      >
        Курсы
      </Button>
    </Box>

    <Box sx={{ flex: "1 0 70%", backgroundColor: "grey", padding: 2 }}>
      <Box>
        <Box sx={{ backgroundColor: "grey", paddingLeft: 5, height: 40 }}>Вакансии</Box>

        <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Search>
            <Border label="Навыки">
              <PositionFilter positionTitle="механик" grade="A1" />
            </Border>
          </Search>
          <Search>
            <CityFilter city="Кимры" label="Город" />
          </Search>
        </Box>

        <VacanciesList />
      </Box>
    </Box>
  </Box>
);
