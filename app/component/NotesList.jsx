import { Link } from '@remix-run/react';

export default function NotesList({ notes }) {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
