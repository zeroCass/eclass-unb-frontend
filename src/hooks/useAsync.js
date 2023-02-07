import { useCallback, useState } from 'react'

export const useAsync = (fn) => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	const execute = useCallback(async () => {
		setLoading(true)
		setData(null)
		setError(null)
		try {
			const response = await fn()
			setLoading(false)
			setData(response)
		} catch (err) {
			setLoading(false)
			setError(err)
		}
	}, [fn])
	return { execute, loading, data, error }
}
