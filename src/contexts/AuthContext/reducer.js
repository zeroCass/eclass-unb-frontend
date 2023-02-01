import * as types from './types'

export const reducer = (state, action) => {
	switch (action.type) {
		case types.AUTH_LOGIN: {
			const newState = {
				...state,
				...action.payload,
			}
			return newState
		}
		case types.AUTH_LOGOUT: {
			return { ...state, ...action.payload }
		}
	}
	return { ...state }
}
