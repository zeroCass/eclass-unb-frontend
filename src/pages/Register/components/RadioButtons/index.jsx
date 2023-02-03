import { useState } from 'react'
import styles from './style.module.css'

export const RadioButtons = () => {
	const [role, setRole] = useState('student')
	return (
		<div className={styles['role-choose']}>
			<h4>Selecione sua função</h4>
			<div className={styles['radio-buttons-container']}>
				<div className={styles['radio-container']}>
					<input
						type={'radio'}
						name="user-role"
						required
						value="student"
						id="student"
						checked={role === 'student'}
						onChange={(e) => setRole(e.target.value)}
					/>
					<label htmlFor="student">Aluno</label>
				</div>
				<div className={styles['radio-container']}>
					<input
						type={'radio'}
						name="user-role"
						required
						value="teacher"
						id="teacher"
						checked={role === 'teacher'}
						onChange={(e) => setRole(e.target.value)}
					/>
					<label htmlFor="teacher">Professor</label>
				</div>
			</div>
		</div>
	)
}
