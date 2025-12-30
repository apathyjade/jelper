
// @ts-ignore
import styled, { css, DefaultTheme, StyledComponent } from 'styled-components';
import { toCssLengthValue } from '../utils';

export interface RowProps extends React.ComponentProps<'div'> {
  $type?: 'row';
  $justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  $align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  $gap?: number | string;
}
export interface ColumnProps extends React.ComponentProps<'div'> {
  $type: 'column';
  $justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
  $align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  $gap?: number | string;
}

export interface RowItemProps extends React.ComponentProps<'div'> {
  $fixed?: boolean;
  $scale?: number;
  $width?: number | string;
  $minWidth?: number | string;
  $maxWidth?: number | string;
}

export interface ColumnItemProps extends React.ComponentProps<'div'> {
  $fixed?: boolean;
  $scale?: number;
  $height?: number | string;
  $minHeight?: number | string;
  $maxHeight?: number | string;
}

const rowStyle = css<RowProps>`
  display: flex;
  justify-content: ${(props: RowProps) => props.$justify || 'flex-start'};
  align-items: ${(props: RowProps) => props.$align || 'stretch'};
  flex-wrap: nowrap;
  width: 100%;
  gap: ${(props: RowProps) => toCssLengthValue(props.$gap)};
  word-break: break-all;
`;
const rowItemStyle = css<RowItemProps>`
  flex: ${(props: RowItemProps) => props.$fixed ? '0 0 auto' : `${props.$scale ?? 1} ${props.$scale ?? 1} auto`};
  width: ${(props: RowItemProps) => toCssLengthValue(props.$width)};
  min-width: ${(props: RowItemProps) => toCssLengthValue(props.$minWidth)};
  max-width: ${(props: RowItemProps) => toCssLengthValue(props.$maxWidth)};
  overflow: auto;
`;

const columnStyle = css<ColumnProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props: ColumnProps) => props.$justify || 'flex-start'};
  align-items: ${(props: ColumnProps) => props.$align || 'stretch'};
  flex-wrap: nowrap;
  height: 100%;
  gap: ${(props: ColumnProps) => toCssLengthValue(props.$gap)};
  word-break: break-all;
`;
const columnItemStyle = css<ColumnItemProps>`
  flex: ${(props: ColumnItemProps) => props.$fixed ? '0 0 auto' : `${props.$scale ?? 1} ${props.$scale ?? 1} auto`};
  height: ${(props: ColumnItemProps) => toCssLengthValue(props.$height)};
  min-height: ${(props: ColumnItemProps) => toCssLengthValue(props.$minHeight)};
  max-height: ${(props: ColumnItemProps) => toCssLengthValue(props.$maxHeight)};
  overflow: auto;
`;

type RowComponent= StyledComponent<'web', RowProps> & {
  Item: StyledComponent<'web', RowItemProps>;
  RowItem: StyledComponent<'web', RowProps & RowItemProps>;
  ColItem: StyledComponent<'web', ColumnProps & RowItemProps>;
};
type ColumnComponent= StyledComponent<'web', ColumnProps> & {
  Item: StyledComponent<'web', ColumnItemProps>;
  RowItem: StyledComponent<'web', RowProps & ColumnItemProps>;
  ColItem: StyledComponent<'web', ColumnProps & ColumnItemProps>;
};

const Row: RowComponent = styled.div<RowProps>`
  ${rowStyle}
`;
const Column: ColumnComponent = styled.div<ColumnProps>`
  ${columnStyle}
`;

Row.Item = styled.div<RowItemProps>`
  ${rowItemStyle}
`;
Row.RowItem = styled.div<RowProps & RowItemProps>`
  ${rowStyle}
  ${rowItemStyle}
`;
Row.ColumnItem = styled.div<ColumnProps & RowItemProps>`
  ${columnStyle}
  ${rowItemStyle}
`;
Column.Item = styled.div<ColumnItemProps>`
  ${columnItemStyle}
`;
Column.RowItem = styled.div<RowProps & ColumnItemProps>`
  ${rowStyle}
  ${columnItemStyle}
`;
Column.ColumnItem = styled.div<ColumnProps & ColumnItemProps>`
  ${columnStyle}
  ${columnItemStyle}
`;

export { Row, Column };
