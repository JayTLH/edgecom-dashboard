import { styled } from "@mui/material";

export const Background = styled("div")(({ theme }) => ({
  background: theme.palette.primary.main,
  height: "100vh",
}));

export const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: "768px",
  margin: "0 auto",
  padding: "16px",
}));
