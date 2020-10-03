import React from "react";

import PrimaryArticle from "../primary-article/PrimaryArticle";
import {
  LatestNewsContainer,
  LatestNewsPrimary,
  LatestNewsSecondary,
  LatestNewsTertiary,
} from "./LatestArticles.style";

export default function LastestArticles({ articles, isShown }) {
  return (
    <LatestNewsContainer>
      <LatestNewsPrimary>
        <PrimaryArticle
          isShown={isShown}
          article={articles[0]}
          animationDelay={0.3}
        />
      </LatestNewsPrimary>
      <LatestNewsSecondary>
        <PrimaryArticle
          isShown={isShown}
          article={articles[1]}
          animationDelay={0.6}
        />
      </LatestNewsSecondary>
      <LatestNewsTertiary>
        <PrimaryArticle
          isShown={isShown}
          article={articles[2]}
          animationDelay={0.9}
        />
      </LatestNewsTertiary>
    </LatestNewsContainer>
  );
}
