import { observer } from "mobx-react-lite";
import { useStore } from "../store/root-store-context";

const Counter = () => {
  const {
    counterStore: { getCount, increment },
  } = useStore();
  return (
    <div className="card">
      <button onClick={() => increment()}>count is {getCount()}</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default observer(Counter);
