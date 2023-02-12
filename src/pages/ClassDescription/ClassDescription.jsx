import { useLocation } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ItemList } from '../../components/ItemList'
import * as Styled from './styles'

const ButtonsComponent = ({ itemButtons, dataItem }) => {
	return (
		<>
			{itemButtons &&
				itemButtons.map((button, index) => (
					<Button
						margin={'0 10px'}
						key={index}
						onClick={() => button.onClick(dataItem)}
					>
						{button.label}
					</Button>
				))}
		</>
	)
}

export const ClassDescription = () => {
	const location = useLocation()
	const classData = location.state
	const exams = classData?.exams || null

	return (
		<Styled.Container>
			<div className="header">
				<h1>{classData.className}</h1>
				<div className="description">
					<p>
						Horario das aulas: {classData.startTime} - {classData.endTime}
					</p>
					<p>Professor: {classData.teacherName}</p>
				</div>
			</div>
			<div className="content">
				<Styled.ListSection>
					{exams &&
						exams.map((exam) => (
							<ul key={exam?.examID}>
								<ItemList
									key={exam?.examID}
									title={exam?.name}
									description={'Nao Iniciado'}
									hasIcon={true}
									timeDate={`Prazo: ${exam?.startTime} - ${exam?.endTime}`}
									buttonsComponents={
										<ButtonsComponent
											dataItem={exam}
											itemButtons={[
												{
													label: 'Visualizar',
													onClick: (data) => console.log(data),
												},
											]}
										/>
									}
								/>
							</ul>
						))}
					{!exams && (
						<div>
							<h2>Nao ha provas</h2>
						</div>
					)}
				</Styled.ListSection>
			</div>
		</Styled.Container>
	)
}
