import fs from 'fs/promises';

export async function getStoredNotes() {
  const data = await fs.readFile('notes.json', 'utf-8');
  return JSON.parse(data);
}

export async function storeNotes(notes) {
  await fs.writeFile('notes.json', JSON.stringify({ notes: notes || [] }));
}