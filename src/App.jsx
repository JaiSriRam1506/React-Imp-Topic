import { useState } from "react";
import Counter from "./Counter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
      iconIncrease="+"
      iconDecrease="-"
      label="My NOT so flexible counter"
      hideLabel={false}
      hideIncrease={false}
      hideDecrease={false}
      positionCount="top"
    /> */}

      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Increase icon="+" />
        <Counter.Count />
      </Counter>

      <div>
        <Counter>
          <Counter.Decrease icon="◀️" />
          <div>
            <Counter.Count />
          </div>
          <Counter.Increase icon="▶️" />
        </Counter>
      </div>
    </div>
  );
}

export default App;
