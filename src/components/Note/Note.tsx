import swal from "sweetalert";
import Notes from "../../Interfaces/NotesIterface";
import { useNotesContext } from "../../NotesContext/NotesContext";
import "./Note.css";

interface noteType {
  note: Notes;
  id?: number;
}

const Note = ({ note }: noteType) => {
  const { title, desc } = note;

  // Get Context Using UseContext
  const { notes, setNotes } = useNotesContext();

  const handleRemove = () => {
    const updateNotes = notes.filter((n: { id: number }) => n.id !== note.id);
    setNotes(updateNotes);
    swal("Deleted", "Notes deleted successfully", "success");
  };

  return (
    <div className="note">
      <h2>{title}</h2>
      <p>{desc}</p>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};

export default Note;
