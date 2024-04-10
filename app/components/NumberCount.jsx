import React, { useState, useEffect } from "react";

const CountUp = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount < targetNumber) {
          return currentCount + 1;
        } else {
          clearInterval(interval);
          return currentCount;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetNumber]);

  return <div>{count}</div>;
};

export default CountUp;
