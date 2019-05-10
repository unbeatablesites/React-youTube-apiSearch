Import axios from "axios";


const KEY = "AIzaSyDbNLw7dGuYZp7rAKWlwEOgSxVmw6geWS0";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
    params:{
      part: "snippet",
      maxResults: 25,
      q: "surfing"

    }

});