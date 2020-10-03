import React from "react";
import Btn from "../btn/Btn";
import {
  ArticleContainer,
  ArticleCta,
  ArticleText,
} from "./PrimaryArticle.style";
import { truncate } from "../../utility";

const PrimaryArticle = ({ article, animationDelay }) => {
  return (
    <ArticleContainer
      animate={{ opacity: 1.0 }}
      transition={{ duration: 0.3, delay: animationDelay }}
    >
      <ArticleText>
        <p>{article.author || "Unknown source"}</p>
        <h2>{truncate(article.title, 128)}</h2>
      </ArticleText>
      <ArticleCta>
        <Btn
          text={"Read it"}
          href={article.url}
          animationDelay={animationDelay}
          _blank={true}
        />
      </ArticleCta>
    </ArticleContainer>
  );
};

export default PrimaryArticle;
