import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./counterSlice";

import "./counter.css";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  
  const handleIncrement = () => {
    dispatch(increment());
  }
  
  const handleDecrement = () => {
    dispatch(decrement());
  }
  
  const handleReset = () => {
    dispatch(reset());
  }
  
  const incrementAmount = useRef();

  const handleIncrementByAmount = () => {
    const amountToIncrement = Number(incrementAmount.current.value) || 0;
    dispatch(incrementByAmount(amountToIncrement));
  }

  const handleDecrementByAmount = () => {
    const amountToDecrement = Number(incrementAmount.current.value) || 0;
    dispatch(decrementByAmount(amountToDecrement));
  }

  return (
    <section className="counter">
      <p className="counter-count">{count}</p>
      <div className="counter-modifier-buttons">
        <button onClick={handleDecrement} className="counter-button">Decrement</button>
        <button onClick={handleIncrement} className="counter-button">Increment</button>
      </div>
        <button onClick={handleReset} className="counter-button">Reset</button>
      <div className="counter-by-amount">
        <input ref={incrementAmount} className="counter-input" type="number" placeholder="Increase by amount" />
        <button className="counter-button" onClick={handleIncrementByAmount}>Increase by this amount</button>
        <button className="counter-button" onClick={handleDecrementByAmount}>Decrease by this amount</button>
      </div>
    </section>
  );
};

export default Counter;
