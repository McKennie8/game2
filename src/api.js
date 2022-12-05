//Base URL
<<<<<<< HEAD
//const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_IGNITE_API}`;
const BASE_URL = `https://api.rawg.io/api/games?key=495bf2f4cf07455485d26b715dd8d764`;
=======
const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_IGNITE_API}`;

>>>>>>> b8595349944537ec94f5a47c2f7980ed52f29199
//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Popular Games
<<<<<<< HEAD
const popularGames = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${BASE_URL}${popularGames}`;
export const upcomingGamesURL = () => `${BASE_URL}${upcomingGames}`;
export const newGamesURL = () => `${BASE_URL}${newGames}`;
=======
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
>>>>>>> b8595349944537ec94f5a47c2f7980ed52f29199
