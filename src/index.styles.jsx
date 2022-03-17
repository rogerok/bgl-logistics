import { css } from "@emotion/react";

export const GlobalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  @font-face {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    src: url("./fonts/manrope-v11-latin-regular.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("./fonts/manrope-v11-latin-regular.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("./fonts/manrope-v11-latin-regular.woff2")
        format("woff2"),
      /* Super Modern Browsers */ url("./fonts/manrope-v11-latin-regular.woff")
        format("woff"),
      /* Modern Browsers */ url("./fonts/manrope-v11-latin-regular.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("./fonts/manrope-v11-latin-regular.svg#Manrope") format("svg"); /* Legacy iOS */
  }
  /* manrope-600 - latin */
  @font-face {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    src: url("./fonts/manrope-v11-latin-600.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("./fonts/manrope-v11-latin-600.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("./fonts/manrope-v11-latin-600.woff2") format("woff2"),
      /* Super Modern Browsers */ url("./fonts/manrope-v11-latin-600.woff")
        format("woff"),
      /* Modern Browsers */ url("./fonts/manrope-v11-latin-600.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("./fonts/manrope-v11-latin-600.svg#Manrope") format("svg"); /* Legacy iOS */
  }
  /* manrope-700 - latin */
  @font-face {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    src: url("./fonts/manrope-v11-latin-700.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("./fonts/manrope-v11-latin-700.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("./fonts/manrope-v11-latin-700.woff2") format("woff2"),
      /* Super Modern Browsers */ url("./fonts/manrope-v11-latin-700.woff")
        format("woff"),
      /* Modern Browsers */ url("./fonts/manrope-v11-latin-700.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("./fonts/manrope-v11-latin-700.svg#Manrope") format("svg"); /* Legacy iOS */
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  body {
    background-color: #e5e5e5;
    font-family: "Manrope";
    font-weight: 400;
    font-size: 16px;
  }
`;
