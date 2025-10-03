import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import {ToDoPage} from "../ToDoPage.tsx";
import {ToDoItem} from "../ToDoItem.tsx";
import type {Entry} from "../Entry";
import userEvent from "@testing-library/user-event";

describe('Todo', () => {
    it('should display the title', async () => {
        render(<ToDoPage/>)
        expect(screen.getByRole("heading", {name: /to/i})).toBeInTheDocument();
    })

    it('should display the todo item', async () => {
        const todo: Entry = {entryId: 1, message: "take out trash", done: false};
        render(<ToDoItem entry={todo} onToggleDone={() => {
        }}/>)
        expect(screen.getByRole("listitem")).toHaveTextContent(/trash/i);
    })

    it('should display all todo items', async () => {
        const todo: Entry[] = [{entryId: 1, message: "take out trash", done: false},
            {entryId: 2, message: "clean out car", done: false},
            {entryId: 3, message: "walk the dog", done: false}];
        render(<ToDoPage initialEntries={todo}/>)
        expect(screen.getAllByRole("listitem")).toHaveLength(3);
    })

    it('should display checkmark', async () => {
        const todo: Entry = {entryId: 1, message: "take out trash", done: true};
        render(<ToDoItem entry={todo} onToggleDone={() => {
        }}/>)
        expect(screen.getByRole("listitem")).toHaveTextContent("✅");
    })

    it('should display checkbox', async () => {
        const todo: Entry = {entryId: 1, message: "take out trash", done: false};
        render(<ToDoItem entry={todo} onToggleDone={() => {
        }}/>)
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
    })

    it('should not display text field when button is not pressed', async () => {
        render(<ToDoPage/>)
        expect(screen.queryByLabelText("newTaskInput")).not.toBeInTheDocument();
    })

    it('should display a submit button', async () => {
        render(<ToDoPage/>)
        expect(screen.getByLabelText("submitButton")).toBeInTheDocument();
    })

    it('should display text field when button is pressed', async () => {
        render(<ToDoPage/>)
        await userEvent.click(screen.getByLabelText("submitButton"));
        expect(screen.queryByLabelText("newTaskInput")).toBeInTheDocument()
    })
})