import React, { useState } from "react";
import styles from "../ImputPlus/ImputPlus.module.scss";


interface TImputPlusProps {
	addTask: (title: string) => void
}


export const ImputPlus: React.FC<TImputPlusProps> = ({
	addTask
}) => {


	const [inputValue, setInputValue] = useState("");

	const add = (title: string) => {
		addTask(title);
		setInputValue("");
	}

	return (
		<div className={styles.imputPlus} >
			<input className={styles.imputPlusInput}
				type="text"
				placeholder="Type here ..."
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						add(inputValue)
					}
				}}
			></input>
			<button className={styles.imputPlusButton}
				aria-label="Add"
				onClick={() => {
					add(inputValue)
				}}
			/>
		</div>
	)
}