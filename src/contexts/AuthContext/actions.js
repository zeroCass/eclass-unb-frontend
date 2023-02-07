/* eslint-disable */
import * as types from './types'

export const login = async (dispatch) => {
	const response = await fetch('./users.json')
	const data = await response.json()
	dispatch({ type: types.AUTH_LOGIN, payload: { ...data } })
}
export const logout = (dispatch) => {
	dispatch({ type: types.AUTH_LOGOUT, payload: { token: false } })
}
