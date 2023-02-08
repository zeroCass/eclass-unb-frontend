import styled from 'styled-components'

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		margin: 2rem 0 1rem 0;
		font-family: Neucha, sans-serif;
		font-size: 2rem;
	}
	> div.search-bar {
		position: relative;
		width: 58%;
		height: 4.8rem;
		display: flex;
		justify-content: center;
		margin-bottom: 2rem;
		> input {
			width: 60%;
			height: 100%;
			padding: 0 2.7rem;
			border: 1px solid #d0cfce;
			outline: none;
			background: white;
			border-radius: 10px;
			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
			&:focus {
				border: 1px solid rgba(0, 0, 0, 0.5);
				transition: border 0.35s ease;
				box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
				&::-webkit-input-placeholder {
					transition: opacity 0.25s ease;
					opacity: 0;
				}
				&::-moz-placeholder {
					transition: opacity 0.25s ease;
					opacity: 0;
				}
				&:-ms-placeholder {
					transition: opacity 0.25s ease;
					opacity: 0;
				}
			}
		}
		> .icon-search {
			position: absolute;
			right: 21%;
			top: 23%;
			/* top: 17.7rem; */
			font-size: 3rem;
			/* margin-right: 2rem; */
		}
	}
`
