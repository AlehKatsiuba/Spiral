import styled from 'styled-components';

export const Image = styled.div`
  background: center / contain no-repeat;
  background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
  ${({ circle }) => circle ? 'border-radius: 50%' : ''};
  ${({ borderColor }) => borderColor ? 'border: 2px solid ' + borderColor : ''};
  background-image: url(${({ imageUrl }) => imageUrl || ''});
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
`;
