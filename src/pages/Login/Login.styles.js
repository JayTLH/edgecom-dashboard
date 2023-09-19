import { styled, Container as MuiContainer, Box as MuiBox } from "@mui/material";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  height: "100vh",
  justifyContent: 'center',
  alignItems: "center",
}));

export const Box = styled(MuiBox)(({ theme }) => ({
  background: theme.palette.secondary.main,
  borderRadius: "8px",
  width: '100%',
  maxWidth: "320px",
  padding: "16px",
}));
