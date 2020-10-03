import axios from "axios";
import { NEWS_API_URL } from "../../src/const";

export default (req, res) => {
  const country = req.query.country;

  axios
    .get(
      `${NEWS_API_URL}/top-headlines/?country=${country}&apiKey=${process.env.NEWS_API_KEY}`
    )
    .then((resApi) => {
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify({ data: resApi.data }));
    });
};
