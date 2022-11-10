import { useActionData, useLoaderData } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { hasErrors } from "~/utils/hasErrors";
import { saveNote } from '~/api/save-note.server';
import { getStoredNotes } from "~/data/notes";
import NewNote from "~/component/NewNote";
import NotesList from "~/component/NotesList";

const errorsTemplate = [
  {
    field: "title",
    message: "Title is required",
    check(data) {
      return data[this.field].trim().length > 0;
    },
  },

  {
    field: "content",
    message: "Content is required",
    check(data) {
      return data[this.field].trim().length > 0;
    },
  },
];

export async function action({ request }) {
  const formData = await request.formData();
  const nodeData = Object.fromEntries(formData);

  const note = {
    title: nodeData.title,
    content: nodeData.content,
    id: Math.random().toString(36).slice(2),
  };

  const errors = hasErrors(note, errorsTemplate);
  if (errors.errors > 0) return { ...errors };
  await saveNote(note);
  return redirect("/notes");
}

export async function loader() {
  const existingNotes = await getStoredNotes();
  return existingNotes;
}

export default function NotesRoute() {
  const { notes } = useLoaderData();
  const errors = useActionData();

  return (
    <main key={notes}>
      <NewNote errors={errors} />
      <NotesList notes={notes} />
    </main>
  );
}
