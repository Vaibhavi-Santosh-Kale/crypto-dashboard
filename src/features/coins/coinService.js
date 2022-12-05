import axios from "axios";
const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

const fetch = async (currency) => {
  const { data } = await axios.get(CoinList(currency));
  localStorage.setItem("currency", JSON.stringify(data));
  return data;
};

const coinService = {
  fetch,
};

export default coinService;
