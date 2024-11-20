import React, { useState, useRef, useLayoutEffect } from "react";

const HeaderScroll = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const headerOffset = headerRef.current.offsetTop;
      if (window.scrollY > headerOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header
        ref={headerRef}
        className={`p-4 bg-blue-500 text-white ${
          isSticky ? "fixed top-0 left-0 w-full shadow-lg" : "relative"
        }`}
      >
        <h1>Sticky Header</h1>
      </header>

      <main className="mt-20 p-4">
        <p>
          Scroll down to see the header stick to the top of the viewport.
        </p>
        <div style={{ height: "2000px" }}>
          <p>Content goes here...</p>
        </div>
      </main>
    </div>
  );
};

export default HeaderScroll;
