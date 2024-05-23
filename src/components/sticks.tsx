export const Stick1 = () => {
  return <div className="z-20 h-[250px] w-[1px] bg-stick-1"></div>;
};

export const Stick2 = () => {
  return <div className="z-20 h-[200px] w-[1px] bg-stick-2"></div>;
};

export const Stick3 = () => {
  return <div className="z-20 h-[200px] w-[1px] bg-stick-2"></div>;
};

export const Sticks = () => {
  const getRandomNumber = () => {
    return `${Math.random().toFixed(3)}s`;
  };

  return (
    <div className="flex">
      <div
        className={`z-10 h-[280px] w-[1px]   bg-stick-1`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2 h-[200px] w-[1px]  bg-stick-2 `}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-1  h-[160px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3  h-[190px] w-[1px]  bg-stick-1`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-1  h-[130px] w-[1px]  bg-stick-4`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2  h-[260px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2  h-[175px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3  h-[300px] w-[1px]  bg-stick-4`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2  h-[150px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2  h-[300px] w-[1px]  bg-stick-2`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3  h-[190px] w-[1px]  bg-stick-1`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3  h-[300px] w-[1px]  bg-stick-2`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3  h-[140px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-1  h-[210px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2  h-[300px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-1  h-[140px] w-[1px]  bg-stick-1`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2  h-[170px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2  h-[175px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3  h-[300px] w-[1px]  bg-stick-1`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2  h-[150px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2  h-[300px] w-[1px]  bg-stick-2`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3  h-[140px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-1  h-[190px] w-[1px]  bg-stick-1`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-0.5  h-[300px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-1  h-[140px] w-[1px]  bg-stick-2`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-8  h-[250px] w-[1px]  bg-stick-1`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
    </div>
  );
};

const delayStops = ["75", "9000"];
