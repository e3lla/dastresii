import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { decrementSecond } from "./CountdownSlice";

const CountDown = () => {
  const dispatch = useDispatch();
  const { hours, minutes, seconds, isRunning } = useSelector((state) => state.countdown);

  useEffect(() => {
    if (!isRunning) return;

    const t = setInterval(() => {
      dispatch(decrementSecond());
    }, 1000);

    return () => clearInterval(t);
  }, [dispatch, isRunning]);

  return (
    <span style={{fontSize: "30px"}}>
      {hours.toString().padStart(2, "0")}:
      {minutes.toString().padStart(2, "0")}:
      {seconds.toString().padStart(2, "0")}
    </span>
  );
};

export default CountDown;
