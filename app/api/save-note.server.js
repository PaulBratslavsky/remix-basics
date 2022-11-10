import { getStoredNotes, storeNotes } from '~/data/notes';

export async function saveNote(note) {
  const existingNotes = await getStoredNotes();
  const { notes } = existingNotes;
  const newNotes = [...notes, note];
  await storeNotes(newNotes);
}