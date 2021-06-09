import request from "../api.service/axios.factory";

const scrapeUrl = () => {
  const data = request("GET", "/openapi.json", "");
  console.log(data);
}

export default scrapeUrl;
