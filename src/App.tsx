import "./App.css";
import { NotesProvider } from "./NotesContext/NotesContext";
import { NotesView } from "./components/NotesView/NotesView";

function App() {
  return (
    <>
      <NotesProvider>
        <NotesView></NotesView>
      </NotesProvider>
    </>
  );
}

export default App;
