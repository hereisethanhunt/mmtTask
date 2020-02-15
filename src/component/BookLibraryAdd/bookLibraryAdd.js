import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBook } from "./actions";
import styles from "./bookLibraryAdd.module.css";

const initialState = {
  disabled: true,
  name: ""
};
class BookLibraryAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  addBook = () => {
    const { name } = this.state;
    let newBook = {
      name,
      id: localStorage.getItem("counter")
    };
    console.log("trigger action", newBook);
    this.props.addBook(newBook);
    this.setState(initialState);
  };

  handleChange = (e, type) => {
    this.setState({ [type]: e.target.value });
  };

  render() {
    return (
      <div className={styles.modalBody}>
        <div className={styles.heading}>{"ADD BOOK"}</div>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputField}
            placeholder="Name"
            type="text"
            value={this.state.name}
            onChange={e => this.handleChange(e, "name")}
          />
        </div>
        <div className={styles.inputContainer}>
          <button
            className={styles.button}
            disabled={!this.state.name}
            onClick={this.addBook}
          >
            Create
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addBook }, dispatch);
}

export default connect(null, mapDispatchToProps)(BookLibraryAdd);
