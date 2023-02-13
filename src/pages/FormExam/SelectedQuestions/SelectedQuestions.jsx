import * as Styled from './styles'

export const SelectedQuestions = ({ selectedQuestions, onScoreChange }) => {
	const handleInputChanges = (event, questionID) => {
		onScoreChange(event.target.value, questionID)
	}

	return (
		<div>
			{selectedQuestions &&
				selectedQuestions.map((question) => (
					<Styled.Container key={question?.questionID}>
						<input
							type="text"
							value={question.score || ''}
							onChange={(event) =>
								handleInputChanges(event, question.id)
							}
						/>
						<div className="statement">
							<span>Enunciado:</span>
							<p>{question.statement}</p>
						</div>
						<div className="answer">
							<span>Reposta:</span>
							<p>{question.answer}</p>
						</div>
					</Styled.Container>
				))}
		</div>
	)
}
