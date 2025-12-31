import type React from 'react';
import styled from 'styled-components';
import { toCssLengthValue } from '../utils';

export interface Props extends React.ComponentProps<'div'> {
  $sideSpace?: number | string;
  $width?: number | string;
  $minWidth?: number | string;
  $maxWidth?: number | string;
}
type WrapStyledProps = Omit<Props, '$width' | '$minWidth' | '$maxWidth'>;
const WrapStyled = styled.div<WrapStyledProps>`
  padding: ${(props: WrapStyledProps) => `0px ${toCssLengthValue(props.$sideSpace || 0)}`};
  overflow: auto;
`;

type InnerStyledProps = Omit<Props, '$sideSpace'>;
const InnerStyled = styled.div<InnerStyledProps>`
  margin: 0 auto;
  width: ${(props: InnerStyledProps) => toCssLengthValue(props.$width)};
  min-width: ${(props: InnerStyledProps) => toCssLengthValue(props.$minWidth)};
  max-width:  ${(props: InnerStyledProps) => toCssLengthValue(props.$maxWidth)};
`;

const Layout = (props: Props) => {
  const { $sideSpace, $width, $minWidth, $maxWidth, children, ...others } =
    props;
  return (
    <WrapStyled {...others} $sideSpace={$sideSpace}>
      <InnerStyled $width={$width} $minWidth={$minWidth} $maxWidth={$maxWidth}>
        {children}
      </InnerStyled>
    </WrapStyled>
  );
};

export default Layout;
