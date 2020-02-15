const BookData = [
  {
    id: 0,
    name: "Harry Potter 1"
  },
  {
    id: 1,
    name: "Harry Potter 2"
  },
  {
    id: 2,
    name: "Harry Potter 3"
  },
  {
    id: 3,
    name: "Harry Potter 4"
  }
];

const LoadInitialBookData = () => {
  localStorage.setItem("BookData", JSON.stringify(BookData));
  return BookData;
};

export default LoadInitialBookData;
