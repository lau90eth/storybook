import React from "react";

type ColorBoxProps = {
  color: string;
  size: number;
  border: boolean;
  borderRadius: number;
};

export const ColorBox: React.FC<ColorBoxProps> = ({
  color,
  size,
  border,
  borderRadius,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius,
        border: border ? "4px solid black" : "none",
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
