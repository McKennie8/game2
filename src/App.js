import React, { useEffect } from "react";
<<<<<<< HEAD
//Components and Pages
import Home from "./pages/Home";
=======
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";
>>>>>>> b8595349944537ec94f5a47c2f7980ed52f29199

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <div className="App">
      <h1>Hello Plibs</h1>
<<<<<<< HEAD
      <Home />
=======
>>>>>>> b8595349944537ec94f5a47c2f7980ed52f29199
    </div>
  );
}

export default App;
