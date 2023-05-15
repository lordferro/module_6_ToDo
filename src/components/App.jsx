import { useDispatch } from "react-redux";
import { add } from "redux/TodoSlice";

export const App = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => {dispatch(add())}}>
    
    </button>
  );
};
