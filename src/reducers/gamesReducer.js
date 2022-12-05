const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
<<<<<<< HEAD
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
=======
      return { ...state, popular: action.payload.popular };
>>>>>>> b8595349944537ec94f5a47c2f7980ed52f29199
    default:
      return { ...state };
  }
};

export default gamesReducer;
