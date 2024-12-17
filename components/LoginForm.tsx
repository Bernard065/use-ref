// useRef used to scroll to a section
"use client";

import React, { useEffect, useRef, useState } from "react";

const LoginForm = () => {
  const scrollRoRef = useRef<HTMLDivElement>(null);
  const [showScrollTopButton, setshowScrollTopButton] = useState(false);

  // Scroll to the specified section
  const scrollToSection = () => {
    scrollRoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Monitor scroll position and update showScrollTopButton state
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRoRef.current) {
        const sectionTop = scrollRoRef.current.getBoundingClientRect().top;
        const viewPortHeight = window.innerHeight;

        if (sectionTop <= viewPortHeight && sectionTop >= 0) {
          setshowScrollTopButton(true);
        } else {
          setshowScrollTopButton(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <button onClick={scrollToSection}>Scroll to Section</button>
      <div style={{ height: "800px" }}>Scroll Down...</div>
      <div ref={scrollRoRef} style={{ height: "400px", background: "blue" }}>
        <p className="font-bold">Hello Bernard</p>
      </div>

      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default LoginForm;
