import React, { Component } from "react";
import PageBase from "../../components/layouts/PageBase";
import Filter from "../../components/fragments/Filter";
import Sort from "../../components/fragments/Sort";
import { TEXT } from "../../configs";
import { FILTER_LIST } from "../../constants";

import classes from "./styles.module.css";

export class component extends Component {
  constructor() {
    super();

    this.state = {
      filterClicked: false,
    };
  }

  _logOutHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("Login", false);
    localStorage.removeItem("lastPath");
    window.location.reload();
  };

  render() {
    return (
      <PageBase logout={(e) => this._logOutHandler(e)}>
        <div className={classes.Definition}>
          <section className={classes.Sec1}>
            <div>
              <h1>
                Bagikan <span>Karyamu!</span>
              </h1>
              <p>{TEXT.TOOLTIP_DEFINITON()}</p>
              <button className={classes.Button}>Cari tau</button>
            </div>
            <div>
              <p>Image Pending</p>
            </div>
          </section>
          <section className={classes.Sec2}>
            <div>
              <h2>Cari Inspirasi Karyamu</h2>
              <input type="search" placeholder="Desain Web Perpustakaan" />
              <p>{TEXT.TOOLTIP_BENEFIT()}</p>
            </div>
          </section>
        </div>
        <div className={classes.Post}>
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
