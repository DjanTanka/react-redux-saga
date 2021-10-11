import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CircularProgress from '@material-ui/core/CircularProgress'
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  const statusPeople = useSelector(state => state.peopleReducer.statusPeople)
  const statusPlanets = useSelector(state => state.planetsReducer.statusPlanets)
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* в данном месте диспатч исп-ся не для редьюсера, а для запуска саги */}
      <button onClick={() => dispatch({ type: "GET_PLANETS_startSaga" })}>
        get planets
      </button>
      <button onClick={() => dispatch({ type: "REMOVE_PLANETS_startSaga" })}>
        clean planets
      </button>
      <button onClick={() => dispatch({ type: "GET_PEOPLE_startSaga" })}>
        get people
      </button>
      <button onClick={() => dispatch({ type: "REMOVE_PEOPLE_startSaga" })}>
        remove people
      </button>
      <button onClick={() => dispatch({ type: "REMOVE_WHOLE_STATE_startSaga" })}>
        remove state
      </button>
      {statusPeople === 'SEARHING'  && <CircularProgress/>}
      {statusPeople === 'SUCCESS'  && <People/>}
      {statusPlanets === 'SEARHING'  && <CircularProgress/>}
      {statusPlanets === 'SUCCESS'  && <Planets/>}
    </div>
  );
}

export default App;
