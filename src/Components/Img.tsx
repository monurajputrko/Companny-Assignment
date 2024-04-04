import React, { useState, useEffect } from "react";

export const Img: React.FC = () => {
  const [flag, setFlag] = useState<boolean>(false);
  const img: string = `https://source.unsplash.com/random/200x200?sig=${Math.random()}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setFlag((prevFlag) => !prevFlag);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {flag ? (
        <img style={{ margin: "10px" }} src={img} alt="img" />
      ) : (
        <img style={{ margin: "10px" }} src={img} alt="img" />
      )}
    </>
  );
};
