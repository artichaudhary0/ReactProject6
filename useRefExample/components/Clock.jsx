import { useEffect, useState, useRef } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return <div>{time}</div>;
};

export default Clock;
