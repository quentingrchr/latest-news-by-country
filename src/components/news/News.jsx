import React, { useState, useEffect } from "react";
import axios from "axios";

import { Main, NotFound } from "./News.style";
import LatestArticles from "../latest-articles/LatestArticles";
import OtherArticles from "../other-articles/OtherArticles";
import BtnSecondary from "../btn/BtnSecondary";

import { NEWS_API_URL } from "../../const";

export default function News({ country }) {
  const [articles, setArticles] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${NEWS_API_URL}/top-headlines/?country=${country}&apiKey=${process.env.NEWS_API_KEY}`
      )
      .then((res) => {
        setArticles(res.data.articles);
        setIsFetched(true);
        setTimeout(() => {
          setIsShown(true);
        }, 100);
      });
  }, []);

  return (
    isFetched && (
      <Main>
        {articles.length >= 1 ? (
          <>
            <LatestArticles articles={articles} isShown={isShown} />
            <OtherArticles articles={articles} />
          </>
        ) : (
          <NotFound>
            <h2>No news were found for this country</h2>
            <BtnSecondary text="Go to homepage" href="/" />
          </NotFound>
        )}
      </Main>
    )
  );
}
