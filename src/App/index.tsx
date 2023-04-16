import React from "react";
import styles from "../App/index.module.scss"
import { useToDoStore } from "../store/toDoStore";
import { ImputPlus } from "../Components/ImputPlus";
import { TaskItem } from "../Components/TaskItem";

export const App: React.FC = () => {
	const [
		tasks,
		addTask,
		removeTask,
		updateTask
	]
		= useToDoStore(state => [
			state.tasks,
			state.addTask,
			state.removeTask,
			state.updateTask,
		])


	return (
		<article className={styles.article}>
			<h1 className={styles.articleTitle} >To Do App</h1>
			<section className={styles.articleSection}>
				<ImputPlus
					addTask={addTask} />
			</section>
			<section className={styles.articleSection}>
				<div>
					{
						!tasks.length && <p className={styles.articleText}>The is no one task...</p>
					}
				</div>
				{
					tasks.map((t) => (<TaskItem
						key={t.id}
						id={t.id}
						title={t.title}
						removeTask={removeTask}
						updateTask={updateTask}
						isDone={removeTask}
					/>))
				}


			</section>
		</article>
	)
}