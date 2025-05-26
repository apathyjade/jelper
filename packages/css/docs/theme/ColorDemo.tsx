import React from 'react';
import styled from 'styled-components';
import '@jelper/css';

interface ColorStyledProps {
  $color: 'brand'|'blue'|'green'|'red'|'orange'|'yellow'|'purple';
}
const ColorStyled = styled.span<ColorStyledProps>`
  margin: 0 12px;
  color: ${(props: ColorStyledProps) => `rgb(var(--aj_color_${props.$color}))`};
`;

const BgcStyled = styled.span<ColorStyledProps>`
  margin-right: 16px;
  padding: 6px 12px;
  display: inline-block;
  color: ${(props: ColorStyledProps) => `rgb(var(--aj_color_${props.$color}))`};
  background: ${(props: ColorStyledProps) => `rgba(var(--aj_color_${props.$color}), var(--aj_bgc_opacity))`};
  border: 1px solid ${(props: ColorStyledProps) => `rgba(var(--aj_color_${props.$color}), var(--aj_bdc_opacity))`};
`;

export default () => {
  return (<>
    <div>颜色</div>
    <div>
      <ColorStyled $color="brand">brand</ColorStyled>
      <ColorStyled $color="blue">blue</ColorStyled>
      <ColorStyled $color="green">green</ColorStyled>
      <ColorStyled $color="red">red</ColorStyled>
      <ColorStyled $color="orange">forange</ColorStyled>
      <ColorStyled $color="yellow">yellow</ColorStyled>
      <ColorStyled $color="purple">purple</ColorStyled>
    </div>
    <div>背景颜色</div>
    <div>
      <BgcStyled $color="brand">brand</BgcStyled>
      <BgcStyled $color="blue">blue</BgcStyled>
      <BgcStyled $color="green">green</BgcStyled>
      <BgcStyled $color="red">red</BgcStyled>
      <BgcStyled $color="orange">forange</BgcStyled>
      <BgcStyled $color="yellow">yellow</BgcStyled>
      <BgcStyled $color="purple">purple</BgcStyled>
    </div>
  </>);
};
