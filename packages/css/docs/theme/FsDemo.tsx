import React from 'react';
import styled from 'styled-components';
import '@jelper/css';

interface FsStyledProps {
  $fs: 'xs'|'s'|'m'|'l'|'xl'
}
const FsStyled = styled.div<FsStyledProps>`
  font-size: ${(props: FsStyledProps) => `var(--aj_fs_${props.$fs})`};
`;

export default () => {
  return (<>
    <>
      <FsStyled $fs="xs">fs-xs</FsStyled>
      <FsStyled $fs="s">fs-s</FsStyled>
      <FsStyled $fs="m">fs-m</FsStyled>
      <FsStyled $fs="l">fs-l</FsStyled>
      <FsStyled $fs="xl">fs-xl</FsStyled>
    </>
  </>);
};
