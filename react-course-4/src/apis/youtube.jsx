import Axios from "axios";

const KEY = "AIzaSyCzq9qDqozynobvzt1-lyBb45admp05O6Y";

export default Axios.create({ //using axios to make requests to the youtube api
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
