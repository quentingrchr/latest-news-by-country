import axios from "axios";
import { NEWS_API_URL } from "../../src/const";

export default (req, res) => {
  const country = "us";
  axios
    .get(
      `${NEWS_API_URL}/top-headlines/?country=${country}&apiKey=${process.env.NEWS_API_KEY}`
    )
    .then((resApi) => {
      console.log(resApi.data);
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify({ data: resApi.data }));
    });
};
