import { styled, Container as MuiContainer, Box as MuiBox } from "@mui/material";
import { Button as SharedButton } from "../../components";
import { DataGrid } from "@mui/x-data-grid";

export const Container = styled(MuiContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "24px 0 0 0",
}));

export const Header = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  margin: "0 0 16px 0",
}));

export const Wrapper = styled(MuiBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Button = styled(SharedButton)(({ theme }) => ({
  height: "fit-content",
}));

export const Grid = styled(DataGrid)(({ theme }) => ({
  background: theme.palette.secondary.light,
}));
