import { useSelector } from "react-redux";
import { NoteState } from "../../redux/noteReducer";

const ListNote = () =>{
    const notes = useSelector<NoteState, NoteState['notes']>((state)=>state.notes);
    return <>
        <ul>
            {notes.map((note)=>{
                return <li key={note}>{note}</li>; 
            })}
          
        </ul>
    </>
  };
  export default ListNote;