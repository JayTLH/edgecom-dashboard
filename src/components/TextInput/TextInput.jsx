import { forwardRef } from 'react';

import * as Styled from './TextInput.styled'

export const TextInput = (props) => {
  return <Styled.TextField variant="outlined" {...props} />;
};
