/* eslint-disable */

export const QuestionsRadio = ({ questionType, setQuestionType }) => {
	return (
		<div>
			<h4>Selecione </h4>
			<div>
				<div>
					<input
						type={'radio'}
						name="question-type"
						value="discursive"
						id="discursive"
						checked={questionType === 'discursive'}
						onChange={(e) => setQuestionType(e.target.value)}
					/>
					<label htmlFor="discursive">Dissertativa</label>
				</div>
				<div>
					<input
						type={'radio'}
						name="question-type"
						value="multipleChoice"
						id="multipleChoice"
						checked={questionType === 'multipleChoice'}
						onChange={(e) => setQuestionType(e.target.value)}
					/>
					<label htmlFor="multipleChoice">Multipla Escolha</label>
				</div>
			</div>
		</div>
	)
}
