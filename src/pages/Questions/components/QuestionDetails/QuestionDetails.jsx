import { Modal } from '../../../../components/Modal'

export const QuestionDetails = ({ isOpen, onClose, questionDetails }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div>
				<h4>{questionDetails?.statement}</h4>
				<p>{questionDetails?.answer}</p>
			</div>
		</Modal>
	)
}
