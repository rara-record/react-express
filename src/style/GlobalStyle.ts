/* eslint-disable no-tabs */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		font-size: 62.5%; 
	}
	
	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}
	
	body {
		font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
	}

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text_link};
  }

	button {
		border:none;
		outline:none;
	}

	input {
		-webkit-appearance: none;
       	-moz-appearance: none;
        appearance: none;
	}
	
	:lang(ko) {
		h1, h2, h3 {
			word-break: keep-all;
		}
	}
`;

export default GlobalStyle;
