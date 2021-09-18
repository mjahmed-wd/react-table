import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setCounterAction } from "../redux/actions";
import GaugeChart from "react-gauge-chart";

const Counter = () => {
  const dispatch = useDispatch();
  const { localStorage } = useSelector((state) => {
    return state;
  }, shallowEqual);
  const [counter, setCounter] = useState(localStorage?.counter);

  useEffect(() => {
    dispatch(setCounterAction(counter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  console.log(counter);
  return (
    <div>
      <div className="d-flex">
        <button
          onClick={() => {
            setCounter((prev) => prev - 1);
          }}
        >
          -
        </button>
        {localStorage?.counter}
        <button
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
        >
          +
        </button>
      </div>
     <div style={{backgroundColor: "black"}}>
     <GaugeChart
        id="gauge-chart3"
        nrOfLevels={30}
        colors={["#FF5F6D", "#FFC371"]}
        arcWidth={0.3}
        percent={localStorage?.counter}
      />
     </div>
    </div>
  );
};

export default Counter;
