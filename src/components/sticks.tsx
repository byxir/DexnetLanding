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
        className={`z-10 mt-6 h-[320px] w-[1px] bg-stick-1   md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2 mt-4 h-[250px] w-[1px] bg-stick-2  md:mt-0 `}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-1 mt-1 h-[210px] w-[1px] bg-stick-3  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3 mt-10 h-[240px] w-[1px] bg-stick-1  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-1 mt-8 h-[180px] w-[1px] bg-stick-4  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2 mt-12 h-[310px] w-[1px] bg-stick-3  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2 mt-4 h-[225px] w-[1px] bg-stick-3  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3 mt-8 h-[350px] w-[1px] bg-stick-4  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2 mt-12 h-[200px] w-[1px] bg-stick-3  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2 mt-16 h-[350px] w-[1px] bg-stick-2  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3 mt-20 h-[240px] w-[1px] bg-stick-1  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3 mt-10 h-[350px] w-[1px] bg-stick-2  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3 mt-8 hidden h-[190px] w-[1px]  bg-stick-3 md:mt-0  md:block`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-1  mt-6 h-[260px] w-[1px] bg-stick-3  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2 mt-4 hidden h-[350px] w-[1px]  bg-stick-3 md:mt-0  md:block`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-1 hidden h-[190px]  w-[1px] bg-stick-1  md:block`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2 mt-10 h-[220px] w-[1px] bg-stick-3  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2 hidden h-[225px]  w-[1px] bg-stick-3  md:block`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3 mt-10 h-[350px]  w-[1px] bg-stick-1  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2 h-[200px]  w-[1px] bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-2  h-[350px] w-[1px]  bg-stick-2`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-3 mt-10 h-[190px]  w-[1px] bg-stick-3  md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-1 hidden h-[240px]  w-[1px] bg-stick-1  md:block`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-0.5  h-[350px] w-[1px]  bg-stick-3`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-1 mt-10 h-[190px] w-[1px] bg-stick-2 md:mt-0`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
      <div
        className={`z-10 ml-8 hidden h-[300px] w-[1px] bg-stick-1  md:block`}
        style={{
          animation: `flicker 3s infinite ${getRandomNumber()}, float 10s ease-in-out infinite ${getRandomNumber()}`,
        }}
      />
    </div>
  );
};

const delayStops = ["75", "9000"];
