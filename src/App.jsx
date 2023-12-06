import NoteList from "./Components/NoteList";
import AddNewList from "./Components/AddNewList";
import { useEffect, useState } from "react";
import { db } from "./Components/DatabaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [notes, setNotes] = useState([]);
  const noteCollectionRef = collection(db, "Newnote");
  const [noteTitle, setNoteTitle] = useState("");
  const [newNote, setNewNote] = useState("");


  
  useEffect(() => {
    const getNotes = async () => {
      const dataNote = await getDocs(noteCollectionRef);
      setNotes(dataNote.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(notes)
   
    };
    getNotes();

  }, []);

  const DeletingNote = async (id) => {
    const DeleteRef = doc(noteCollectionRef, id);
    await deleteDoc(DeleteRef);
    window.location.reload();
    
  };
  const addingNewNote = async () => {
    if (newNote === "" && noteTitle === "") {
      alert("Please enter a title and description for the new note");
    } else {
      await addDoc(noteCollectionRef, { title: noteTitle, note: newNote });
      setNoteTitle("");
      setNewNote("");
      window.location.reload();
    }
  };

  
  return (
<>
    <div className="Note p-1 container-fluid">
      <AddNewList
        addlist={addingNewNote}
        setNewTitle={setNoteTitle}
        setNewNote={setNewNote}
      />
      <NoteList
        note={notes}
        newNoteTitle={noteTitle}
        NewNote={newNote}
        Deleting={DeletingNote}
      />
    </div>
    </>
  );
}

export default App;
