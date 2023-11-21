import { ReactNode, createContext, useContext, useState } from "react";
import Notes from "../Interfaces/NotesIterface";

interface NotesContextProps {
  notes: Notes[];
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
  addNotes: (notes: Notes) => void;
}

export const NotesContext = createContext<NotesContextProps | undefined>(
  undefined
);

export const NotesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notes, setNotes] = useState<Notes[]>([]);

  const addNotes = (notes: Notes) => {
    setNotes((prevNotes) => [...prevNotes, notes]);
  };

  return (
    <NotesContext.Provider value={{ notes, setNotes, addNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
};
