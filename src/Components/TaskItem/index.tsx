import React, { useEffect, useRef, useState } from "react";
import styles from "../TaskItem/taskitem.module.scss"


interface TaskItemProps {
	id: string,
	title: string,
	removeTask: (id: string) => void,
	updateTask: (id: string, title: string) => void,
	isDone: (id: string) => void,
}



export const TaskItem: React.FC<TaskItemProps> = ({
	isDone,
	removeTask,
	updateTask,
	id,
	title }) => {

	const [checked, setChecked] = useState(false);
	const [onEdit, setOnEdit] = useState(false);
	const [editTitle, setEditTitle] = useState(title);
	const inputEditText = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (onEdit) {
			inputEditText.current?.focus();
		}
	}, [onEdit])

	return (
		<div className={styles.taskItem}>
			<label className={styles.taskItemLabel} >
				<input className={styles.taskItemCheck}
					type="checkbox"
					checked={checked}
					disabled={onEdit}
					onChange={(e) => {
						if (confirm("Are you sure?"))
						 {
							setChecked(e.target.checked)
							//isDone(id);    ///if need to remove
						}
					}}
				/>
				{
					onEdit ? (
						<input className={styles.taskItemEditText}
							type="text"
							ref={inputEditText}
							value={editTitle}
							onChange={(e) => {
								setEditTitle(e.target.value)
							}}
							onKeyDown={(evt) => {
								if (evt.key === "Enter") {
									updateTask(id, title);
									setOnEdit(false);
								}
							}} />
					) : (
						<p className={checked? styles.taskItemTextIsDone: styles.taskItemText}>{editTitle}</p>
					)}
			</label>
			{
				onEdit ?
					<button className={styles.taskItemSave}
						aria-label="Save"
						onClick={() => {
							updateTask(id, title)
							setOnEdit(false)
						}} />
					:
					<button className={styles.taskItemEdit}
						aria-label="Edit"
						onClick={() => {
							if(checked){
								return;
							}
							setOnEdit(true)
						}}>
					</button>
			}



			<button className={styles.taskItemDelete}
				aria-label="Delete"
				onClick={() => {
					if (confirm("Are you sure?")) {
						removeTask(id)
					}
				}}
			></button>

		</div>
	)
}