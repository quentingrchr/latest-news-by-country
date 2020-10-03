import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

import { motion } from "framer-motion";

import {
  ArticleContainer,
  ArticleContent,
  ImgNotFound,
} from "./SecondaryArticle.style";
import Btn from "../btn/Btn";
import { truncate } from "../../utility";

export default function SecondaryArticle({ article, contentIsRight }) {
  const [inViewport, setInViewport] = useState(false);

  const variantContent = {
    visible: { transform: `translateX(0px)` },
    hidden: { transform: `translateX(${contentIsRight ? "20rem" : "-20rem"})` },
  };

  const variantAside = {
    visible: { transform: `translateX(0px)` },
    hidden: { transform: `translateX(${contentIsRight ? "-20rem" : "20rem"})` },
  };

  const transition = {
    duration: 0.3,
    type: "ease",
  };

  return (
    <Waypoint
      onEnter={() => {
        setInViewport(true);
        console.log("in viewport");
      }}
    >
      <div>
        <ArticleContainer contentIsRight={contentIsRight}>
          <ArticleContent
            animate={inViewport ? "visible" : "hidden"}
            variants={variantContent}
            transition={transition}
            contentIsRight={contentIsRight}
          >
            <div>
              <p>{article.author || "Unknown source"}</p>
              <h3>{truncate(article.title, 128)}</h3>
            </div>

            <Btn text={"Read it"} href={article.url} _blank={true} />
          </ArticleContent>
          <motion.aside
            animate={inViewport ? "visible" : "hidden"}
            variants={variantAside}
            transition={transition}
          >
            {article.urlToImage ? (
              <img src={article.urlToImage} alt="preview" />
            ) : (
              <ImgNotFound />
            )}
          </motion.aside>
        </ArticleContainer>
      </div>
    </Waypoint>
  );
}
