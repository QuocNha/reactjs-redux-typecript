import { useState } from "react";

type InputNoteProps = {
  addNote(note: string): void;
};

export const AddNote: React.FC<InputNoteProps> = (props) => {
  const { addNote } = props;
  const [note, setNote] = useState("");
  const handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>) =>{
    console.log(event.target.value)
    if(!event.target.value) return;
    setNote(event.target.value);
  };
  const handleAddNote = () =>{
    addNote(note);
    setNote("");
  }
  return (
    <>
      <input onChange={handleInputChange} type="type" name="note" placeholder="Note"></input>
      <button onClick={handleAddNote}>Add note </button>
    </>
  );
};

