import React from "react";

type Props = {
  size?: "sm" | "default";
};

function Loading({ size = "default" }: Props) {
  return (
    <div
      className={`flex items-center justify-center w-full ${size === "sm" ? "p-0" : "p-5"
        }`}
    >
      <div className="loader" />
    </div>
  );
}

export default Loading;
