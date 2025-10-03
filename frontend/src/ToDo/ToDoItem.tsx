
// @ts-ignore
import type {Entry} from "./Entry";

type ToDoItemProps = {
    entry: Entry
    onToggleDone: () => void}

export function ToDoItem({entry, onToggleDone}: ToDoItemProps){



    return(
        <>
            <tr className="border border-black-3000" style={{background: entry.done ? "#66FF99" : "white"}}>
            <td className="border border-black-3000"><span>{entry.entryId}</span> </td>
            <td className="border border-black-3000"><span className="">{entry.message}</span></td>
                <td className="border border-black-3000"> <input type="checkbox" checked={entry.done} onChange={onToggleDone} aria-label={`Mark ${entry.message} as done`} /></td>
            </tr>
        </>
    );
}
