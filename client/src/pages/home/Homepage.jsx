import React, { useContext } from "react";
import Article from "./articles/Articles.jsx";
import { Link } from "react-router-dom";
import { myContext } from "../../context/language.js";
import Flip from 'react-reveal/Flip';
import "./homepage.css";

const Homepage = () => {
  const { lang, sixTopArticles } = useContext(myContext);
  const getSixTopArticles = localStorage.getItem("sixTopArticles") ? JSON.parse(localStorage.getItem("sixTopArticles")) : sixTopArticles; 

  return (
    <div className="page">
      <div className="articles-container">
        {getSixTopArticles
          ? getSixTopArticles.map((article) => {
              const topArticle = article;
              return (
                <Link key={"link" + topArticle._id} to={`/article/${article._id}`} className="article-link" style={{ textDecoration: 'none' }}>
                         <Flip top>
                         <Article
                                key={topArticle._id}
                                lang={lang}
                                article={topArticle}
                        />
                         </Flip>
                
                </Link>
              );
            })
          : <div className="loader-container"><div class="loader"></div></div>}
      </div>
    </div>
  );
};

export default Homepage;
