import React from "react";
import { FC } from "react";

import "./styles.css";

interface CityFilterProps {
  city: string;
  label: string;
}

export const CityFilter: FC<CityFilterProps> = ({ city, label }) => (
  <div className="city-filter-container">
    <span>{label}</span>
    <span className="city-filter-text">{city}</span>
  </div>
);
