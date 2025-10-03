import { useState } from 'react';
import type { Entry } from "./Entry";
import {ToDoItem}from "./ToDoItem.tsx";

type ToDoPageProps = {
    initialEntries?: Entry[];
}


export function ToDoPage ({initialEntries}: ToDoPageProps){
    const [entries, setEntries] = useState<Entry[]>(initialEntries || [
        {entryId: 1, message: "walk the dog", done: false}
    ]);

    const [newMessage, setNewMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);


    const toggleDone = (entryId: number | null) => {
        setEntries((prev) =>
        prev.map((entry) =>
        entry.entryId === entryId ? {...entry, done: !entry.done} : entry))
    }

    const newTask = (newMessage: string)=> {
        if(!newMessage.trim()) return;
        const newTask = {
            entryId : entries.length + 1,
            message : newMessage,
            done: false
        };
        newMessage="";
        setEntries((prev) =>
        [...prev, newTask]);
        setNewMessage("")
        setIsOpen(false)
    };

    return (
        <>
            <table className="border-collapse md:border-separate border md:border-black-400 table-fixed w-full scheme-light">
                <thead className="bg-amber-400">
                <tr>
                    <th className="border border-black-3000">Task Number</th>
                    <th className="border border-black-3000">Description</th>
                    <th className="border border-black-3000">Status</th>
                </tr>
                </thead>
                <tbody>
                {entries.map((entry => (
                    <ToDoItem key={entry.entryId} entry={entry} onToggleDone={() => toggleDone(entry.entryId)}/>
                )))}
                </tbody>
            </table>
            <div className={"submit-group"}>
                {isOpen && (<form onSubmit={() => newTask(newMessage)}> <input className="" id="taskInput" type="text" placeholder="Enter your new task" aria-label="newTaskInput"
                                   value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/></form>)}
                <button className="bg-blue-500 rounded-2xl" aria-label={"submitButton"} disabled={false} onClick={() => setIsOpen(true)}>Add Task</button>
            </div>
        </>

    );
}

