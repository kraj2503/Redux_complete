import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../state/store";
import {
  decrement,
  increment,
  increamentByAmount,
} from "../state/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
const [amount ,setAmount] = useState(0)

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
    console.log("insie Counter");

  return (
      <>
          <h2>
              
          {count}
          </h2>
          <div>
              
      <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decremnt</button>
          
          <input type="number" placeholder="Number" onChange={(e)=>setAmount(Number(e.target.value))}></input>
              </div>
          <div>
              
          <button onClick={
              () => {
                  
                  dispatch(increamentByAmount(amount))
                  
                }
            }
            >Increment by Amount</button>
        
            </div>
              
    </>
  );
};


export default Counter;