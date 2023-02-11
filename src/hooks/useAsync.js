import { useCallback, useState } from 'react'

export const useAsync = (fn) => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	const execute = useCallback(async () => {
		let isCancelled = false // dont update state if unmount
		setLoading(true)
		setData(null)
		setError(null)
		try {
			const response = await fn()
			if (!isCancelled) {
				setLoading(false)
				setData(response)
			}
		} catch (err) {
			if (!isCancelled) {
				setLoading(false)
				setError(err.message || 'An error occurred while fetching data.')
			}
		}

		// unmount function
		return () => {
			isCancelled = true
		}
	}, [fn])

	return { execute, loading, data, error }
}
