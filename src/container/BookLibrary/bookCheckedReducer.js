import {
  ADD_CHECKED_BOOK,
  REMOVE_CHECKED_BOOK,
  REMOVE_BOOK_ALL
} from "./constants";

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_CHECKED_BOOK: {
      const newEntry = action.payload;
      let newData = [...state, { ...newEntry }];
      localStorage.setItem("CheckedData", JSON.stringify(newData));
      return [...newData];
    }

    case REMOVE_CHECKED_BOOK: {
      const id = action.payload;
      var obj = state.filter(obj => {
        return obj.id !== id;
      });
      let newData = [...obj];
      localStorage.setItem("CheckedData", JSON.stringify(newData));
      return [...newData];
    }

    case REMOVE_BOOK_ALL: {
      localStorage.setItem("CheckedData", JSON.stringify([]));
      return [];
    }

    default:
      return state;
  }
}
