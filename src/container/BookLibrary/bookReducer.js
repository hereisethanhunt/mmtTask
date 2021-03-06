import { ADD_BOOK, REMOVE_BOOK } from "./constants";

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const newEntry = action.payload;
      let newData = [...state, { ...newEntry }];
      localStorage.setItem("BookData", JSON.stringify(newData));
      let newCount = parseInt(localStorage.getItem("counter"), 10) + 1;
      localStorage.setItem("counter", newCount);
      return [...newData];
    }

    case REMOVE_BOOK: {
      const id = action.payload;
      var obj = state.filter(obj => {
        return obj.id !== id;
      });
      let newData = [...obj];
      localStorage.setItem("BookData", JSON.stringify(newData));
      return [...newData];
    }

    default:
      return state;
  }
}
