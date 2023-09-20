import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useContext } from "react";

import { ArticleContext, ArticleProvider } from "./articles";

test("initiate article context", () => {
  const Component = () => {
    const article = useContext(ArticleContext);
    return <div>articlesLength: {article.articles.length}</div>;
  };

  render(
    <ArticleProvider>
      <Component />
    </ArticleProvider>
  );

  const element = screen.queryByText(/articlesLength:/i);
  expect(element.textContent).toBe("articlesLength: 3");
});
