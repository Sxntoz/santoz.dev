import React from 'react';

const Intro = () => {
  const name = "Santoz";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      <div className="flex">
        {name.split("").map((letter, index) => (
          <span
            key={index}
            className="intro-letter inline-block text-8xl md:text-[12rem] font-black text-[#ffd400]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Intro;
