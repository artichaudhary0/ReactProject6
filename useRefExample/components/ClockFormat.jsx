import { useEffect, useState, useRef } from "react";

const ClockFormat = () => {
  const [time, setTime] = useState(new Date());

  console.log(time);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // format Time :

  const formatTimeValue = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    // AM PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // format 24H , 12H

    // hours = hours % 12 || 12; // 1%12 => 1 2%12=2 3%12 = 3 12%12 = 0 13%12 = 1 14%12 = 2

    return `${hours} : ${minutes} : ${seconds} ${ampm}`;
  };

  const formateDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div>{formatTimeValue(time)}</div>
      <div>{formateDate(time)}</div>
    </>
  );
};

export default ClockFormat;
