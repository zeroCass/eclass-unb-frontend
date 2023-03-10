import axios from 'axios'

export const baseURL = 'http://127.0.0.1:8000/api/v1'

export const fetchData = async (endpoint) => {
	try {
		const response = await fetch(`${baseURL}/${endpoint}/`)
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
		return error
	}
}

export const getData = async (endpoint) => {
	try {
		const response = await axios.get(`${baseURL}/${endpoint}/`)
		return response.data
	} catch (error) {
		window.alert(
			`(STATUS-CODE: ${error.response.status}) errors: ${error.response.data} - ${error.response.message}`,
		)
	}
}

export const getDatabyID = async (endpoint, id) => {
	try {
		const response = await axios.get(`${baseURL}/${endpoint}/${id}/`)
		return response.data
	} catch (error) {
		window.alert(
			`(STATUS-CODE: ${error.response.status}) errors: ${error.response.data} - ${error.response.message}`,
		)
	}
}

export const putDataById = async (endpoint, id, data) => {
	try {
		console.log(`${baseURL}/${endpoint}/${id}/`, data)
		const response = await axios.put(`${baseURL}/${endpoint}/${id}/`, data)
		return response.data
	} catch (error) {
		window.alert(
			`(STATUS-CODE: ${error.response.status}) errors: ${error.response.data} - ${error.response.message}`,
		)
	}
}

export const postData = async (endpoint, data) => {
	try {
		const response = await axios.post(`${baseURL}/${endpoint}/`, data)
		return response.data
	} catch (error) {
		window.alert(
			`(STATUS-CODE: ${error.response.status}) errors: ${error.response.data} - ${error.response.message}`,
		)
	}
}
