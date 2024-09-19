import { Box } from "@mui/material";
import React from "react";
import { VacancyCard } from "../vacancyCard/VacancyCard";

import { CircularProgress } from "@mui/material";
import { FixedSizeList as VirtualizedList } from "react-window";
import { useVacanciesList } from "../../hooks/useVacanciesList";

export const VacanciesList: React.FC = () => {
  const { handleScroll, vacancies, isFetching } = useVacanciesList();

  const renderRow = ({ index, style }: { index: number; style: any }) => {
    const vacancy = vacancies[index];
    return (
      <Box style={style} key={vacancy.id}>
        <VacancyCard
          city={vacancy.city}
          companyName={vacancy.companyName}
          vacancyTitle={vacancy.vacancyTitle}
          salary={vacancy.salary}
          experience={vacancy.experience}
        />
      </Box>
    );
  };

  return (
    <Box>
      <Box
        onScroll={handleScroll}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "40px",
          maxHeight: "700px",
          overflowY: "auto",
        }}
      >
        <VirtualizedList height={700} itemCount={vacancies.length} itemSize={350} width="100%">
          {renderRow}
        </VirtualizedList>

        {isFetching && (
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </Box>
  );
};
