import { useState } from "react";

const initialVacancies = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  city: "Кимры",
  companyName: "ООО ОПТИМУС",
  vacancyTitle: `Вакансия №${index + 1}`,
  salary: "130000 - 220000 руб. на руки",
  experience: "Опыт 3 -6 лет",
}));

export const useVacanciesList = () => {
  const [vacancies, setVacancies] = useState(initialVacancies);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreVacancies = () => {
    if (!hasMore || isFetching) return;

    setIsFetching(true);

    setTimeout(() => {
      const newVacancies = Array.from({ length: 20 }, (_, index) => ({
        id: vacancies.length + index + 1,
        city: "Кимры",
        companyName: "ООО ОПТИМУС",
        vacancyTitle: `Вакансия №${vacancies.length + index + 1}`,
        salary: "130000 - 220000 руб. на руки",
        experience: "Опыт 3 -6 лет",
      }));

      setVacancies((prevVacancies) => [...prevVacancies, ...newVacancies]);

      if (vacancies.length + newVacancies.length >= 100) {
        setHasMore(false);
      }

      setIsFetching(false);
    }, 1000);
  };

  const handleScroll = (e: any) => {
    if (!hasMore || isFetching) return;

    const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 50;

    if (bottom) {
      loadMoreVacancies();
    }
  };

  return { handleScroll, vacancies, isFetching };
};
