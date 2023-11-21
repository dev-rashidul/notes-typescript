import { ChangeEvent, useState } from "react";
import swal from "sweetalert";
import { useNotesContext } from "../../NotesContext/NotesContext";
import "./NotesForm.css";

const NotesForm = () => {
  // Get Context Using UseContext

  const { addNotes } = useNotesContext();

  // Create State for Get values form field

  const [title, setTitle] = useState("");
  const [content, setDesc] = useState("");

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onDescChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
  };

  // Function for Aadd Notes

  const handleAddNotes = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (title && content) {
      const newNotes = {
        id: Math.random(),
        title,
        desc: content,
      };

      addNotes(newNotes);
      swal("Added", "Notes added successfully", "success");
      setTitle("");
      setDesc("");
    }
  };

  return (
    <>
      <section id="Notes-form">
        <div className="notes-form-container">
          <div className="notes-form-title">
            <h2>Add Notes</h2>
          </div>
          <form onSubmit={handleAddNotes}>
            <div className="notes-form">
              <div className="form-field">
                <label>Notes Title</label>
                <input
                  onChange={onTitleChange}
                  type="text"
                  value={title}
                  placeholder="Enter your Title"
                  required
                />
              </div>
              <div className="form-field">
                <label>Notes Description</label>
                <input
                  onChange={onDescChange}
                  type="text"
                  value={content}
                  placeholder="Enter your description"
                  required
                />
              </div>
              <div className="button-field">
                <button type="submit">Add Notes</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default NotesForm;
