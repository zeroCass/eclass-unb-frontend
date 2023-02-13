import { useLocation } from 'react-router-dom'
import { Button } from '../../components/Button/styles'
import * as Styled from './styles'

export const Exam = () => {
	const location = useLocation()
	const examData = location.state

	const handleBack = () => {
		window.history.back()
	}

	const startDate = new Date(examData.startTime)
	const formattedStartDate =
		startDate.toLocaleDateString() + ' ' + startDate.toLocaleTimeString()

	return (
		<Styled.Container>
			<div className="header">
				<h1>{examData.name}</h1>
				<div className="description">
					<p>Iniciado em: {formattedStartDate}</p>
				</div>
			</div>
			<div className="content">
				<Styled.ListQuestions>
					{examData.questions.map((question, index) => (
						<div className="component" key={question.questionID}>
							<div className="question">
								<div className="name">
									<h3>QUESTÃO {index + 1}</h3>
								</div>
								<div className="statement">
									<h3>{question.statement}</h3>
								</div>
							</div>

							<div className="form-div">
								<form>
									<input
										type="Resposta"
										placeholder="Resposta"
									></input>
								</form>
							</div>
						</div>
					))}
					<div className="buttons-div">
						<Button
							margin={'30px'}
							width={'20%'}
							height={'55px'}
							fontSize={'18px'}
							onClick={handleBack}
						>
							Enviar
						</Button>
					</div>
				</Styled.ListQuestions>
			</div>
		</Styled.Container>
	)
}
