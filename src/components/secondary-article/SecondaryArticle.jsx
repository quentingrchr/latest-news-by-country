import React from "react";

import {
  ArticleContainer,
  ArticleContent,
  ImgNotFound,
} from "./SecondaryArticle.style";
import Btn from "../btn/Btn";
import { truncate } from "../../utility";

export default function SecondaryArticle({ article, contentIsRight }) {
  console.log("im rendered");
  return (
    <div>
      <ArticleContainer contentIsRight={contentIsRight}>
        <ArticleContent contentIsRight={contentIsRight}>
          <div>
            <p>{article.author || "Unknown source"}</p>
            <h3>{truncate(article.title, 128)}</h3>
          </div>

          <Btn
            text={"Read it"}
            href={article.url}
            // animationDelay={animationDelay}
            _blank={true}
          />
        </ArticleContent>
        <aside>
          {article.urlToImage ? (
            <img src={article.urlToImage} alt="preview" />
          ) : (
            <ImgNotFound />
          )}
        </aside>
      </ArticleContainer>
    </div>
  );
}
