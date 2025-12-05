
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
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  scale?: number;
}
interface ColumnStyledProps {
  $justify: Props['justify'];
  $align: Props['align'];
  $gap: Props['gap'];
}

interface ColumnItemStyledProps {
  $fixed?: boolean;
  $scale?: number;
  $height?: number | string;
  $minHeight?: number | string;
  $maxHeight?: number | string;
}

const ColumnStyled = styled.div<ColumnStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props: ColumnStyledProps) => props.$justify};
  align-items: ${(props: ColumnStyledProps) => props.$align};
  flex-wrap: nowrap;
  gap: ${(props: ColumnStyledProps) => toCssLengthValue(props.$gap)};
  word-break: break-all;
`;
const ColumnItemStyled = styled.div<ColumnItemStyledProps>`
  flex: ${(props: ColumnItemStyledProps) => props.$fixed ? '0 0 auto' : `${props.$scale} ${props.$scale} auto`};
  height: ${(props: ColumnItemStyledProps) => toCssLengthValue(props.$height)};
  min-height: ${(props: ColumnItemStyledProps) => toCssLengthValue(props.$minHeight)};
  max-height: ${(props: ColumnItemStyledProps) => toCssLengthValue(props.$maxHeight)};
  overflow: auto;
`;

const Column = (props: Props) => {
  const { justify = 'flex-start', align = 'stretch', gap, ...others } = props;
  return (
    <ColumnStyled {...others} $justify={justify} $align={align} $gap={gap} />
 );
};

Column.Item = (props: ItemProps) => {
  const { fixed, scale = 1, height, minHeight, maxHeight, ...others } = props;
  return (
    <ColumnItemStyled {...others} $fixed={fixed} $scale={scale} $height={height} $minHeight={minHeight} $maxHeight={maxHeight} />
  );
};

export default Column;
