import { useCatch, useLoaderData, Link } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getStoredNotes } from "~/data/notes";

export function meta({ data }) {
  return {
    title: data.title,
    description: "A better way to track your notes",
  };
}

export async function loader({ params }) {
  const { notes } = await getStoredNotes();

  const note = notes.find((note) => note.id === params.noteId);
  if (!note)
    throw json(
      { message: "Note not found" },
      { status: 404, statusText: "Not Found" }
    );
  return note;
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

export default function SingleNoteRoute() {
  const { title, content } = useLoaderData();
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <Link to="/notes">Back to notes</Link>
    </div>
  );
}
