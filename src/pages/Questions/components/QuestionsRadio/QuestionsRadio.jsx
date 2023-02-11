/* eslint-disable */
import * as Styled from './styles'

export const QuestionsRadio = ({ questionType, setQuestionType }) => {
	return (
		<Styled.Conainer>
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
		</Styled.Conainer>
	)
}
