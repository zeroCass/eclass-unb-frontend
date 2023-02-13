/* eslint-disable */
import axios from 'axios'
import { baseURL } from '../../api/index'
import * as types from './types'

export const login = async (dispatch, credentials) => {
	try {
		const response = await axios.post(`${baseURL}/login/`, credentials)
		const data = response.data
		const userData = {
			token: data.token,
			...data.user,
		}
		dispatch({ type: types.AUTH_LOGIN, payload: { ...userData } })
	} catch (error) {
		window.alert(
			`(STATUS-CODE: ${error.response.status}) errors: ${error.response.data} - ${error.response.message}`,
		)
	}
}
export const logout = (dispatch) => {
	dispatch({ type: types.AUTH_LOGOUT, payload: { token: false } })
}
