import { styled, Box } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "400px",
  background: theme.palette.secondary.light,
  borderRadius: "8px",
  padding: "16px",
  maxHeight: "90vh",
  overflowY: "auto",
}));
