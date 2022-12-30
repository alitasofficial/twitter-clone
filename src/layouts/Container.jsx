import React from "react";

export default function Container({ children }) {
  return (
    <div className="container flex min-h-screen max-w-7xl mx-auto">
      {children}
    </div>
  );
}
