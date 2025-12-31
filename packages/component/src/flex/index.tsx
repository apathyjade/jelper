import styled, { css } from 'styled-components';
import { toCssLengthValue } from '../utils';

export interface RowProps extends React.ComponentProps<'div'> {
  $justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
  $align?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  $gap?: number | string;
}
export interface ColProps extends React.ComponentProps<'div'> {
  $justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch';
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

export interface ColItemProps extends React.ComponentProps<'div'> {
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
  flex: ${(props: RowItemProps) => (props.$fixed ? '0 0 auto' : `${props.$scale ?? 1} ${props.$scale ?? 1} auto`)};
  width: ${(props: RowItemProps) => toCssLengthValue(props.$width)};
  min-width: ${(props: RowItemProps) => toCssLengthValue(props.$minWidth)};
  max-width: ${(props: RowItemProps) => toCssLengthValue(props.$maxWidth)};
  overflow: auto;
`;

const colStyle = css<ColProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props: ColProps) => props.$justify || 'flex-start'};
  align-items: ${(props: ColProps) => props.$align || 'stretch'};
  flex-wrap: nowrap;
  height: 100%;
  gap: ${(props: ColProps) => toCssLengthValue(props.$gap)};
  word-break: break-all;
`;
const colItemStyle = css<ColItemProps>`
  flex: ${(props: ColItemProps) => (props.$fixed ? '0 0 auto' : `${props.$scale ?? 1} ${props.$scale ?? 1} auto`)};
  height: ${(props: ColItemProps) => toCssLengthValue(props.$height)};
  min-height: ${(props: ColItemProps) => toCssLengthValue(props.$minHeight)};
  max-height: ${(props: ColItemProps) => toCssLengthValue(props.$maxHeight)};
  overflow: auto;
`;

type RowComponent = React.FC<RowProps> & {
  Item: React.FC<RowItemProps>;
  RowItem: React.FC<RowProps & RowItemProps>;
  ColItem: React.FC<ColProps & RowItemProps>;
};
type ColComponent = React.FC<ColProps> & {
  Item: React.FC<ColItemProps>;
  RowItem: React.FC<RowProps & ColItemProps>;
  ColItem: React.FC<ColProps & ColItemProps>;
};

const Row: RowComponent = styled.div<RowProps>`
  ${rowStyle}
` as unknown as RowComponent;
const Col: ColComponent = styled.div<ColProps>`
  ${colStyle}
` as unknown as ColComponent;

Row.Item = styled.div<RowItemProps>`
  ${rowItemStyle}
`;
Row.RowItem = styled.div<RowProps & RowItemProps>`
  ${rowStyle}
  ${rowItemStyle}
`;
Row.ColItem = styled.div<ColProps & RowItemProps>`
  ${colStyle}
  ${rowItemStyle}
`;
Col.Item = styled.div<ColItemProps>`
  ${colItemStyle}
`;
Col.RowItem = styled.div<RowProps & ColItemProps>`
  ${rowStyle}
  ${colItemStyle}
`;
Col.ColItem = styled.div<ColProps & ColItemProps>`
  ${colStyle}
  ${colItemStyle}
`;

export { Row, Col };
