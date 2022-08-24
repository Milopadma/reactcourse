import Axios from "axios";

export default Axios.create({ //create a new instance of Axios with the baseURL set to the unsplash API
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID Xo7OOJy85K9oGSWI1rKX9P2qqrCV7zxJaskDf-YLAHU"
    }
});
