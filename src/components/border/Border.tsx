import React, { FC } from "react";

import "./styles.css";

interface BorderProps extends React.PropsWithChildren {
  label: string;
}

export const Border: FC<BorderProps> = ({ label, children }) => (
  <div className="border-with-label">
    <span className="border-label">{label}</span>
    <div className="border-content-wrapper">{children}</div>
  </div>
);
