import { useState } from 'react'
import { RiQuestionAnswerLine } from 'react-icons/ri'
import { Modal } from '../../../../components/Modal'
import * as Styled from './styles'

export const QuestionDetails = ({ isOpen, onClose, questionDetails }) => {
	const [showAnswer, setShowAnswer] = useState(false)

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Styled.Container>
				<div className="header">
					<h3>Professor: {questionDetails?.teacherName}</h3>
				</div>

				<div className="quest-div ">
					<h4>{questionDetails?.statement}</h4>
				</div>
				<Styled.AnswerButton onClick={() => setShowAnswer(!showAnswer)}>
					<div className="icon">
						<RiQuestionAnswerLine size={20} />
					</div>
					<h4>Resposta</h4>
				</Styled.AnswerButton>
				{showAnswer && (
					<div className="answer">
						<p>{questionDetails?.answer}</p>
					</div>
				)}
			</Styled.Container>
		</Modal>
	)
}
