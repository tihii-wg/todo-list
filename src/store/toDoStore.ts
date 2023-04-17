import { create } from "zustand";
import { generateId } from "../helpers/helpers"

export interface Task {
	id: string,
	title: string,
	createdAt: number,
}

export interface ToDoStore {
	tasks: Task[],
	addTask: (title: string) => void,
	removeTask: (id: string) => void,
	updateTask: (id: string, title: string) => void,
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
	tasks: [],
	addTask: (title: string) => {
		const { tasks } = get();
		const newTask = {
			id: generateId(),
			title,
			createdAt: Date.now()
		}
		{
			title.trim() !== "" ? set({ tasks:[newTask].concat(tasks)}) : confirm("Enter task...")
		}
	},

	removeTask: (id:string) => {
		const { tasks } = get();
		set({
			tasks: tasks.filter(t => t.id !== id)
		})
	},

	updateTask: (id: string, title: string) => {
		const { tasks } = get();
		set({
			tasks:tasks.map((t)=>({
				...t,
				title:t.id === id? title : t.title
			}))
	});

	}

})

)


