import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Styled from '../ModalContent/styles'

export const MyClasses = ({ formattedClassData }) => {
	const navigate = useNavigate()
	const [myClasses, setMyClasses] = useState(formattedClassData)

	useEffect(() => {
		setMyClasses(formattedClassData)
	}, [formattedClassData])

	return (
		<ul>
			{myClasses.map((classes) => (
				<li key={classes.classID}>
					<Styled.Classes className="info-div">
						<h4>
							<button
								onClick={() =>
									navigate('/class-description', {
										state: classes.dataItem,
									})
								}
							>
								{classes.title}
							</button>
							- {classes.description} ({classes.startTime} -
							{classes.endTime})
						</h4>
					</Styled.Classes>
				</li>
			))}
		</ul>
	)
}
