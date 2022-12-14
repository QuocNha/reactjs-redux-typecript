import { Action } from "./action";

export interface NoteState {
  notes: string[];
}

const initialState = {
  notes: [],
};
export const notesReducer = (
  state: NoteState = initialState,
  action: Action
) => {
    switch (action.type){
        case "ADD_NOTE":
            return {...initialState,notes: [...state.notes, action.payload]}
        default   :
        return state;
    }
};
