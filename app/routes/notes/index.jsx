import { useCatch, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getStoredNotes } from "~/data/notes";
import NotesList from "~/component/NotesList";

export async function loader() {
  const { notes } = await getStoredNotes();
  console.log(notes);
  if (!notes || notes.length === 0)
    throw json(
      { message: "No notes found" },
      { status: 404, statusText: "Not Found" }
    );
  return notes;
}

export function CatchBoundary() {
  const response = useCatch();
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{response.data?.message}</p>
    </div>
  );
}

export default function NotesRoute() {
  const notes = useLoaderData();
  return  <NotesList notes={notes} />
}
