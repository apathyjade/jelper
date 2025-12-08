
import React from 'react';
// @ts-ignore
import styled from 'styled-components';
import { toCssLengthValue } from '../utils';

export interface Props extends React.ComponentProps<any> {
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  gap?: number | string;
}

export interface ItemProps extends React.ComponentProps<any> {
  fixed?: boolean;
  scale?: number;
  width?: string | string;
  minWidth?: string | string;
  maxWidth?: string | string;
}

interface RowStyledProps {
  $justify: Props['justify'];
  $align: Props['align'];
  $gap: Props['gap'];
}

interface RowItemStyledProps {
  $fixed?: boolean;
  $scale?: number;
  $width?: number | string;
  $minWidth?: number | string;
  $maxWidth?: number | string;
}

const RowStyled = styled.div<RowStyledProps>`
  display: flex;
  justify-content: ${(props: RowStyledProps) => props.$justify};
  align-items: ${(props: RowStyledProps) => props.$align};
  flex-wrap: nowrap;
  gap: ${(props: RowStyledProps) => toCssLengthValue(props.$gap)};
  word-break: break-all;
`;
const RowItemStyled = styled.div<RowItemStyledProps>`
  flex: ${(props: RowItemStyledProps) => props.$fixed ? '0 0 auto' : `${props.$scale} ${props.$scale} auto`};
  width: ${(props: RowItemStyledProps) => toCssLengthValue(props.$width)};
  min-width: ${(props: RowItemStyledProps) => toCssLengthValue(props.$minWidth)};
  max-width: ${(props: RowItemStyledProps) => toCssLengthValue(props.$maxWidth)};
  overflow: auto;
`;

const Row = (props: Props) => {
  const { justify = 'flex-start', align = 'flex-start', gap, ...others } = props;
  return (
    <RowStyled {...others} $justify={justify} $align={align} $gap={gap} />
 );
};

Row.Item = (props: ItemProps) => {
  const { fixed, scale = 1, width, minWidth, maxWidth, ...others } = props;
  return (
    <RowItemStyled {...others} $fixed={fixed} $scale={scale} $width={width} $minWidth={minWidth} $maxWidth={maxWidth} />
  );
};

export default Row;
