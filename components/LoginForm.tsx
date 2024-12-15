// useRef used to scroll to a section
"use client";

import React, { useRef } from "react";

const LoginForm = () => {
  const scrollRoRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    scrollRoRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <button onClick={scrollToSection}>Scroll to Section</button>
      <div style={{ height: "800px" }}>Scroll Down...</div>
      <div
        ref={scrollRoRef}
        style={{ height: "400px", background: "blue" }}
      ></div>
    </div>
  );
};

export default LoginForm;
