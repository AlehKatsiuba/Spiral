import React from 'react';
import styled from 'styled-components';

export const Image = styled.div`
  background: center / contain no-repeat;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  ${({ circle }) => circle ? 'border-radius: 50%;' : ''};
  background-image: url(${({ imageUrl }) => imageUrl || ''});
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
`;
