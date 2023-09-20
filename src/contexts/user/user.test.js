import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useContext } from "react";

import { UserProvider, UserContext } from "./user";

test("initiate user context", () => {
  const Component = () => {
    const user = useContext(UserContext);
    return <div>currentUser: {user.currentUser || "none"}</div>;
  };

  render(
    <UserProvider>
      <Component />
    </UserProvider>
  );

  const element = screen.queryByText(/currentUser:/i);
  expect(element.textContent).toBe("currentUser: none");
});
