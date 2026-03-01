import { useDispatch, useSelector } from "react-redux";
import type { RootState,AppDispatch } from "../state/store";
import {
  decrement,
  increment,
    increamentByAmount,
  incrementAsync
} from "../state/counter/counterSlice";
import { useState } from "react";

const Counter = () => {
const [amount ,setAmount] = useState(0) 

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>(); 
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
    
  
          <div>
              
          <button onClick={
              () => {
                  
                  dispatch(incrementAsync(amount))
                  
                }
            }
            >Increment async</button>
        
            </div>
              
    </>
  );
};


export default Counter;