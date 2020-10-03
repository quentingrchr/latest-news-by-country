import React from "react";
import SecondaryArticle from "../secondary-article/SecondaryArticle";

export default function OtherArticles({ articles }) {
  console.log(articles);
  return (
    <div>
      {articles.map((a, i) => {
        return (
          <SecondaryArticle
            article={a}
            key={a.url}
            contentIsRight={(i + 1) % 2 === 0}
          />
        );
      })}
    </div>
  );
}
