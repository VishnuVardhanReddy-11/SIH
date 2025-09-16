import React from "react";

const Tag = ({ children, color = "emerald" }) => {
  const bgClass = `bg-${color}-100 text-${color}-800`;
  const borderClass = `border border-${color}-200`;

  return (
    <span
      className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${bgClass} ${borderClass}`}
    >
      {children}
    </span>
  );
};

export default Tag;
