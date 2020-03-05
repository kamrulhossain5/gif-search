import axios from "axios";

const KEY = "h1Ayn2DOhhsO9tlQjVgamdZApGTuxUsN";

// pre configuration of axios for Giphy Search
export default axios.create({
  baseURL: "https://api.giphy.com",
  params: {
    api_key: KEY,
    limit: 30
  }
});
