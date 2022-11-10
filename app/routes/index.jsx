import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main id="content">
      <h1>A betere way to track your notes</h1>
      <p>Try our note taking app</p>
      <p id="cta">
        <Link to="/notes">Try Now!</Link>
      </p>
    </main>
  );
}
