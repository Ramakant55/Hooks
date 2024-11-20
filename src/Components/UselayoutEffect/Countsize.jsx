import React, { useState, useLayoutEffect, useRef } from "react";

const Countsize = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
   const width=divRef.current.offsetWidth;
   setWidth(width);
  }, []);

  return (
    <div
      ref={divRef}
     className="p-32 mt-10 font-bold text-3xl border-2 border-black rounded-2xl text-center"
    >
      Width: {width}px
    </div>
  );
};

export default Countsize;
