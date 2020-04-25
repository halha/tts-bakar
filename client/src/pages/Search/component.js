import React, { Component } from "react";
import PageBase from "../../components/layouts/PageBase";
import Filter from "../../components/fragments/Filter";
import Sort from "../../components/fragments/Sort";
import { FILTER_LIST } from "../../constants";
import postList from "../../constants/Dummy/postList";
import userList from "../../constants/Dummy/userList";

import classes from "./styles.module.css";

export class component extends Component {
  componentDidMount() {
    console.log(this.props);
    document.title = "BaKar | No result";
  }

  render() {
    return (
      <PageBase>
        <div className={classes.ResultsSec}>
          <div>
            <h1>Menampilkan Hasil dari "{this.props.location.state.term}"</h1>
          </div>
        </div>
        <div className={classes.UsersSec}>
          <div></div>
        </div>
        <div className={classes.PostSec}>
          <div className={classes.nav2}>
            <Filter list={FILTER_LIST} />
            <Sort />
          </div>
        </div>
      </PageBase>
    );
  }
}

export default component;
