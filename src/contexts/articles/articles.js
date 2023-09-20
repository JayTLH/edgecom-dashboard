import { useContext, createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

import { seed } from "../../db/articles";
import { UserContext } from "../user";

export const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const user = useContext(UserContext);
  const articleData = JSON.parse(localStorage.getItem("articles"));
  const [articles, setArticles] = useState(articleData || []);

  const createArticle = (data) => {
    const newArticle = {
      ...data,
      id: uuid(),
      createdAt: new Date(),
      user: user.currentUser,
    };

    const newArticleArray = [...articles, newArticle];
    setArticles([...articles, newArticle]);
    localStorage.setItem("articles", JSON.stringify(newArticleArray));
  };

  const editArticle = (data) => {
    const articleIndex = articles.findIndex((article) => data.id === article.id);
    const newArticleArray = articles.slice();
    newArticleArray[articleIndex] = data;
    localStorage.setItem("articles", JSON.stringify(newArticleArray));
    setArticles(newArticleArray);
  };

  const deleteArticle = (id) => {
    const filteredArticles = articles.filter((article) => article.id !== id);
    localStorage.setItem("articles", JSON.stringify(filteredArticles));
    setArticles(filteredArticles);
  };

  useEffect(() => {
    // initialize mock database
    if (!articleData) {
      localStorage.setItem("articles", JSON.stringify(seed));
      setArticles(articleData);
    }
  }, [articleData]);

  return (
    <ArticleContext.Provider
      value={{
        articles,
        createArticle,
        editArticle,
        deleteArticle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};
