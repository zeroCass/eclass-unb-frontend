import { useLocation } from 'react-router-dom'

export const ClassDescription = () => {
	const location = useLocation()
	const classData = location.state

	return (
		<section>
			<header>
				<h1>{classData?.className}</h1>
				<p>
					{classData?.startTime} - {classData?.endTime}
				</p>
			</header>

			<div>
				{classData?.exams?.map((exam) => (
					<li key={exam?.examID}>
						<h4>{exam?.name}</h4>
						<p>
							{exam?.startTime} - {exam?.endTime}
						</p>
					</li>
				))}
			</div>
		</section>
	)
}
