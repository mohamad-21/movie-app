import React from "react";

function PageChangeLoading() {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center w-full h-full z-50">
      <div className="loader" />
    </div>
  );
}

export default PageChangeLoading;
