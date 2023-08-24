import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <>
      <Typewriter
        onInit={(typewriter) =>
          typewriter.typeString("Hello, there!").pauseFor(2000).start()
        }
      />
    </>
  );
};

export default TypewriterEffect;
