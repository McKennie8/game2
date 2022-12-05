import axios from "axios";
<<<<<<< HEAD
import { popularGamesURL, newGamesURL, upcomingGamesURL } from "../api";
=======
import { popularGamesURL } from "../api";
>>>>>>> b8595349944537ec94f5a47c2f7980ed52f29199

//ACTION CREATOR
export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
<<<<<<< HEAD
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
=======
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData,
>>>>>>> b8595349944537ec94f5a47c2f7980ed52f29199
    },
  });
};
