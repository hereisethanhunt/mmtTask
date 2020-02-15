import {
  ADD_CHECKED_BOOK,
  REMOVE_BOOK,
  REMOVE_CHECKED_BOOK,
  REMOVE_BOOK_ALL
} from "../../container/BookLibrary/constants";

export function addCheckedBook(values) {
  return {
    type: ADD_CHECKED_BOOK,
    payload: values
  };
}

export function removeBook(values) {
  return {
    type: REMOVE_BOOK,
    payload: values
  };
}

export function removeCheckedBookAll(values) {
  return {
    type: REMOVE_BOOK_ALL,
    payload: values
  };
}

export function removeCheckedBook(values) {
  return {
    type: REMOVE_CHECKED_BOOK,
    payload: values
  };
}
