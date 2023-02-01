import * as types from './types'

export const login = async (dispatch) => {
	dispatch({ type: types.AUTH_LOGIN, payload: { token: true } })
}
export const logout = (dispatch) => {
	dispatch({ type: types.AUTH_LOGOUT, payload: { token: false } })
}
