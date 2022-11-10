import { Outlet } from "@remix-run/react";

export function meta() {
  return {
    title: "Notes",
    description: "A better way to track your notes",
  };
}

export default function NotesRoute() {
  return <main><Outlet /></main>;
}