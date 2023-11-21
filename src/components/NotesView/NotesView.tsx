import Notes from "../../Interfaces/NotesIterface";
import { useNotesContext } from "../../NotesContext/NotesContext";
import Note from "../Note/Note";
import "./NotesView.css";

import NotesForm from "../NotesForm/NotesForm";

export const NotesView = () => {
  // Get Context Using UseContext

  const { notes } = useNotesContext();

  return (
    <div>
      <NotesForm></NotesForm>

      {/* Notes Section JSX */}

      <section id="Notes">
        <div className="notes-wrapper">
          <div className="notes-container">
            {notes.map((note: Notes) => (
              <Note note={note} key={note.id}></Note>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
