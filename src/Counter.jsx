import { useState } from "react"

const Counter = () => {
    const [value, setValue] = useState(0);
    const incrementVallue = ()=>{
        setValue(value+1);
    }
    const decrementvalue = ()=>{
        setValue(value-1);
    }
  return (
    <div>
      <button onClick={incrementVallue}>Increment</button>
      <div>{value}</div>
      <button onClick={decrementvalue}>Decrement</button>
    </div>
  );
}

export default Counter
