import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "BISMILLAH",
          "OPEN JASAr",
          "PAID EDIT FOTO",
          "PAID EDIT VIDEO",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
