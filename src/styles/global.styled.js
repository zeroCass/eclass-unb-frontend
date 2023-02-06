import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		font-size: 62.5%;
    	scroll-behavior: smooth;
	}

	body {
		font-size: 1.6rem;
		min-height: 100vh;
		background-color: #E5E5E5;
		overflow-x: hidden;
	}

	#root {
		min-width: 100vw;
		min-height: 100vh;
	}
`
