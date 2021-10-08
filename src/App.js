import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  // const store = useSelector(store => store)
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* в данном месте диспатч исп-ся не для редьюсера,  а для запуска саги */}
      <button onClick={() => dispatch({ type: "CLICK_LOAD_startSaga" })}>
        {" "}
        Click{" "}
      </button>
      <button onClick={() => dispatch({ type: "CLICK_CLEAN_startSaga" })}>
        {" "}
        Clean Store{" "}
      </button>
    </div>
  );
}

export default App;
