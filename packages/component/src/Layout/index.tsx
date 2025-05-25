
import React, { } from 'react';
// @ts-ignore
import styled from 'styled-components';
import { toCssLengthValue } from '../utils';

export interface Props extends React.ComponentProps<any> {
  sideSpace?: number | string;
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
}
interface WrapStyledProps {
  $sideSpace?: number | string;
}
const WrapStyled = styled.div<WrapStyledProps>`
  padding: ${(props: WrapStyledProps) => `0 ${toCssLengthValue(props.$sideSpace)}`};
  overflow: auto;
`;
interface InnerStyledProps {
  $width?: number | string;
  $minWidth?: number | string;
  $maxWidth?: number | string;
}
const InnerStyled = styled.div<InnerStyledProps>`
  margin: 0 auto;
  width: ${(props: InnerStyledProps) => toCssLengthValue(props.$width)};
  min-width: ${(props: InnerStyledProps) => toCssLengthValue(props.$minWidth)};
  max-width:  ${(props: InnerStyledProps) => toCssLengthValue(props.$maxWidth)};
`;

const Layout = (props: Props) => {
  const { sideSpace = 0, width, minWidth, maxWidth, children, ...others } = props;

  return (
    <WrapStyled {...others} $sideSpace={sideSpace}>
      <InnerStyled $width={width} $minWidth={minWidth} $maxWidth={maxWidth}>
        { children }
      </InnerStyled>
    </WrapStyled>
 );
}

export default Layout;
