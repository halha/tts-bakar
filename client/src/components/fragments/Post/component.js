import React, { Component } from "react";

import classes from "./styles.module.css";

export class component extends Component {
  _preventDragHandler = (e) => {
    e.preventDefault();
  };

  render() {
    const { data } = this.props;
    return (
      <div className={classes.Post}>
        <div className={classes.imgBox}>
          <img
            src={require(`../../../assets/${data.image}`)}
            alt={data.id_post}
            onDragStart={this._preventDragHandler}
          />
        </div>
        <div className={classes.des}>
          <div className={classes.pDes}>
            <p>{data.title}</p>
          </div>
          <div className={classes.profile}>
            <div>
              <img
                src={data.profile.avatar}
                alt="avatar"
                onDragStart={this._preventDragHandler}
              />
            </div>
            <span>{data.profile.username}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default component;
