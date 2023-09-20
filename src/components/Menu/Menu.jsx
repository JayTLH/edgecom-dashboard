import { Menu as MuiMenu, MenuItem } from "@mui/material";

export const Menu = (props) => {
  const { items, open, onClose, anchorEl } = props;

  return (
    <MuiMenu open={open} onClose={onClose} anchorEl={anchorEl}>
      {items.map((item) => (
        <MenuItem key={item.label} onClick={(event) => item.onClick(event)}>
          {item.label}
        </MenuItem>
      ))}
    </MuiMenu>
  );
};
