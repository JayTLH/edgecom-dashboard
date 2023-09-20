import { Modal as MuiModal } from "@mui/material";

import * as Styled from "./Modal.styles";

export const Modal = (props) => {
  const { children, open, onClose } = props;

  return (
    <MuiModal open={open} onClose={onClose}>
      <Styled.Wrapper>{children}</Styled.Wrapper>
    </MuiModal>
  );
};
