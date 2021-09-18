import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setCounterAction } from "../redux/actions";
// import NumberCounter from "number-counter";
import CountUp from "react-countup";

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

  return (
    <div>
      <CountUp
        className="account-balance "
        start={0}
        end={counter}
        duration={0.75}
        separator=" "
        decimals={0}
        delay={0}
      >
        {({ countUpRef, start }) => (
          <div className="d-flex justify-content-center align-items-center">
            {" "}
            
              <button
                className="btn btn-primary"
                style={{visibility: counter > 0 ?"visible": "hidden"}}
                onClick={() => {
                  setCounter((prev) => prev - 1);
                }}
              >
                Decrease Count
              </button>
            <p className="font_big ml-5 mr-5" ref={countUpRef} />
            <button
              className="btn btn-primary"
              onClick={() => {
                setCounter((prev) => prev + 1);
                start();
              }}
            >
              Increase Count
            </button>
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Counter;
