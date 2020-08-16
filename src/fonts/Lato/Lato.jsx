import React from "react";
import { createGlobalStyle } from "styled-components";
import latoBlack from "./Lato-Black.ttf";

export const Lato = createGlobalStyle`
  @font-face {
        font-family: 'lato';
        src: local('Font Name'), local('FontName'),
        url(${latoBlack}) format('ttf');
    }
`;
