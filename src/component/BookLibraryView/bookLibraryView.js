import React from "react";
import { connect } from "react-redux";
import styles from "./bookLibraryView.module.css";
import {
  addCheckedBook,
  removeBook,
  removeCheckedBook,
  removeCheckedBookAll
} from "./actions";

import { addBook } from "../BookLibraryAdd/actions";
import { bindActionCreators } from "redux";

class BookLibraryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: []
    };
  }

  handleChange = (e, id) => {
    const { BookData } = this.props;
    var addtochecked = BookData.filter(obj => obj.id === id);
    this.props.addCheckedBook(...addtochecked);
    this.props.removeBook(id);
  };

  handleChangeChecked = (e, id) => {
    const { CheckedData } = this.props;
    // let list = [...this.state.checkedList];
    // let status = e.target.checked;
    // let checkedList = [];
    // if (status) checkedList = list.push(id);
    // else
    //   checkedList = list.filter(obj => {
    //     return obj.id !== id;
    //   });
    // this.setState({ checkedList });
    var addfromchecked = CheckedData.filter(obj => obj.id === id);
    this.props.addBook(...addfromchecked);
    this.props.removeCheckedBook(id);
  };

  deleteSelected = () => {
    this.props.removeCheckedBookAll();
  };

  render() {
    console.log(this.state.checkedList, "importanty");
    const { BookData, CheckedData } = this.props;
    return (
      <div className={styles.bookLibraryView}>
        <div className={styles.heading}>{"VIEW BOOK"}</div>

        <main>
          <section>
            {BookData &&
              BookData.length &&
              BookData.length > 0 &&
              BookData.map(el => {
                return (
                  <article className={styles.checkList} key={el.name}>
                    <div>
                      <input
                        type="checkbox"
                        onChange={e => this.handleChange(e, el.id)}
                      />
                    </div>
                    <div>{el.name}</div>
                  </article>
                );
              })}

            <hr />
            <div className={styles.heading}>{"SELECTED BOOK"}</div>
            {CheckedData && CheckedData.length && CheckedData.length > 0
              ? CheckedData.map(el => {
                  return (
                    <article className={styles.checkList} key={el.name}>
                      <div>
                        <input
                          type="checkbox"
                          checked={this.state.isChecked}
                          onChange={e => this.handleChangeChecked(e, el.id)}
                          id={el.id}
                        />
                      </div>
                      <div>{el.name}</div>
                    </article>
                  );
                })
              : null}
            {CheckedData && CheckedData.length && CheckedData.length > 0 ? (
              <div className={styles.inputContainer}>
                <button className={styles.button} onClick={this.deleteSelected}>
                  Clear all completed
                </button>
              </div>
            ) : null}
          </section>
        </main>
      </div>
    );
  }
}

function mapStateToProps({ BookData, CheckedData }) {
  return { BookData, CheckedData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addCheckedBook,
      removeBook,
      addBook,
      removeCheckedBook,
      removeCheckedBookAll
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookLibraryView);
