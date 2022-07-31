import ListNote from "./components/feature/ListNote";
import { AddNote } from "./components/feature/AddNote";
import { useDispatch } from "react-redux";
import {addNote} from '../src/redux/action'

const App = () => {
  const dispatch = useDispatch();
  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <div>
        <AddNote addNote={onAddNote} />
        <hr />
        <ListNote />
      </div>
    </>
  );
};

export default App;
