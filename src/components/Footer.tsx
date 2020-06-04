import * as React from 'react';
import styled from 'styled-components';

const Root = styled.footer``;

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function (props: FooterProps) {
  return <Root {...props}></Root>;
}
