export const baseURL = 'http://127.0.0.1:8000'

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
