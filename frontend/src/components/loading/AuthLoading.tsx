import React from "react";

export const AuthLoading = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen">
        <div className="w-10 h-10 border-4 border-indigo-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
    </>
  );
};
