import { useState, useContext, useEffect } from "react";
import { Typography } from "@mui/material";

import * as Styled from "./Login.styles";
import { TextInput, Button } from "../../components";
import { UserContext } from "../../contexts";
import { validateInputs } from "./utils/index";

export const Login = () => {
  const user = useContext(UserContext);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errors, setErrors] = useState({});
  const formData = { email, password, rePassword };

  const onSubmit = (event) => {
    event.preventDefault();

    const validations = validateInputs(formData);

    if (isSignUp) {
      if (Object.keys(validations)) {
        user.setErrors("There is an issue with the form");
        setErrors(validations);
        return;
      }

      user.register(formData);
    } else {
      user.login(formData);
    }
  };

  return (
    <Styled.Container>
      <Styled.Box>
        <form onSubmit={onSubmit}>
          <Typography variant="h4" marginBottom="16px">
            {isSignUp ? "Register" : "Login"}
          </Typography>

          <TextInput
            label="E-mail"
            style={{ marginBottom: "16px" }}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <Typography color="error" style={{ marginBottom: "16px" }}>
              {errors.email}
            </Typography>
          )}

          <TextInput
            type="password"
            label="Password"
            style={{ marginBottom: "16px" }}
            autoComplete="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <Typography color="error" style={{ marginBottom: "16px" }}>
              {errors.password}
            </Typography>
          )}

          {isSignUp && (
            <>
              <TextInput
                type="password"
                label="Re-enter password"
                style={{ marginBottom: "16px" }}
                onChange={(e) => setRePassword(e.target.value)}
              />
              {errors.rePassword && (
                <Typography color="error" style={{ marginBottom: "16px" }}>
                  {errors.rePassword}
                </Typography>
              )}

              <Typography variant="overline">Passwords must:</Typography>
              <ul style={{ margin: "0 0 16px 0" }}>
                <li>
                  <Typography variant="overline">be at least 8 character long</Typography>
                </li>
                <li>
                  <Typography variant="overline">include one capital letter</Typography>
                </li>
                <li>
                  <Typography variant="overline">include one number</Typography>
                </li>
              </ul>
            </>
          )}

          {user.errors && (
            <Typography color="error" style={{ marginBottom: "16px" }}>
              {user.errors}
            </Typography>
          )}

          <Button type="submit" style={{ marginBottom: "12px" }}>
            {isSignUp ? "Sign-up" : "Sign-in"}
          </Button>

          <Button
            variant="outlined"
            onClick={() => {
              setIsSignUp(!isSignUp);
              user.setErrors("");
              setErrors({});
            }}
          >
            {isSignUp ? "Login" : "Register"}
          </Button>
        </form>
      </Styled.Box>
    </Styled.Container>
  );
};
