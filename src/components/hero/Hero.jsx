import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Hero() {
  const firstRef = useRef(null);  // For 'Frontend' / 'Web'
  const secondRef = useRef(null); // For 'Developer' / 'Engineer'
  const firstTyped = useRef(null);
  const secondTyped = useRef(null);

  useEffect(() => {
    firstTyped.current = new Typed(firstRef.current, {
      strings: ['Frontend', 'Web'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 3000,
      loop: true,
      showCursor: false,
    });

    secondTyped.current = new Typed(secondRef.current, {
      strings: ['Developer'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 3000,
      loop: true,
      showCursor: false,
    });

    return () => {
      firstTyped.current.destroy();
      secondTyped.current.destroy();
    };
  }, []);

  return (
    <div id="hero" className="my-container flex flex-col justify-center gap-32">
      <h2 className="flex flex-col text-[10.7vw] leading-none">
        <div className="self-start">
          <span className="gradient-text">...</span> <span ref={firstRef} className="inline-block min-w-[8ch] align-bottom" />
        </div>
        <div className="self-end">
          <span ref={secondRef} className="inline-block min-w-[9ch] align-bottom" /><span className="gradient-text">...</span>
        </div>
      </h2>

      <div className="flex justify-center items-center gap-8">
        <button type="button" id="btn-type1">Resume</button>
        <button type="button" id="btn-type1">My Work</button>
      </div>
    </div>
  );
}

export default Hero;
