import React from "react";

type ColorBoxProps = {
  color: string;
  size?: number;
  border?: boolean;
};

export const ColorBox: React.FC<ColorBoxProps> = ({
  color,
  size = 120,
  border = true,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        border: border ? "2px solid black" : "none",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      {color}
    </div>
  );
};
