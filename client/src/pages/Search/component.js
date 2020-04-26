import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Masonry from "react-masonry-css";
import PageBase from "../../components/layouts/PageBase";
import Filter from "../../components/fragments/Filter";
import Sort from "../../components/fragments/Sort";
import Post from "../../components/fragments//Post";
import { FILTER_LIST } from "../../constants";
import postList from "../../constants/Dummy/postList";
import userList from "../../constants/Dummy/userList";

import classes from "./styles.module.css";

export class component extends Component {
  constructor() {
    super();

    this.state = {
      fireRedirect: false,
      term: "",
    };
  }

  componentDidMount() {
    document.title = `BaKar | Hasil dari ${this.props.location.state.term}`;
  }

  _searchOnChange = (e) => {
    this.setState({ term: e.target.value });
  };

  _searcOnSubmit = (e) => {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  };

  render() {
    const { fireRedirect, term } = this.state;

    const users = userList
      // eslint-disable-next-line
      .filter((user) => {
        if (
          user.username
            .toLowerCase()
            .includes(this.props.location.state.term.toLowerCase())
        ) {
          return user;
        }
      })
      .map((user) => {
        const maxChar = 12;
        if (user.username.length > maxChar) {
          user.username = user.username.substring(0, maxChar) + "...";
        }
        return (
          <div key={user.username} className={classes.user}>
            <div className={classes.avatarBox}>
              <img src={user.avatar} alt={`Avatar ${user.username}`} />
            </div>
            <p>{user.username}</p>
          </div>
        );
      });

    const posts = postList
      // eslint-disable-next-line
      .filter((post) => {
        if (
          post.title
            .toLowerCase()
            .includes(this.props.location.state.term.toLowerCase())
        ) {
          return post;
        }
      })
      .map((post) => {
        return <Post key={post.id_post} data={post} />;
      });

    return (
      <PageBase>
        <div className={classes.ResultsSec}>
          <div>
            <h1>Menampilkan Hasil dari "{this.props.location.state.term}"</h1>
            <form onSubmit={this._searcOnSubmit}>
              <input
                onChange={this._searchOnChange}
                value={term}
                placeholder={this.props.location.state.term}
                required
              />
              <button type="submit" style={{ display: "none" }}>
                Cari
              </button>
            </form>
            {fireRedirect && (
              <Redirect
                to={{
                  pathname: "/search",
                  state: {
                    term: term,
                  },
                }}
              />
            )}
          </div>
        </div>
        <div className={classes.UsersSec}>
          <div>
            {users.length > 0 ? (
              users
            ) : (
              <p className={classes.notFound}>User tidak ditemukan</p>
            )}
          </div>
        </div>
        <div className={classes.PostSec}>
          <div className={classes.nav2}>
            <Filter list={FILTER_LIST} />
            <Sort />
          </div>
          {posts.length > 0 ? (
            <Masonry
              breakpointCols={3}
              className={classes.myMasonryGrid}
              columnClassName={classes.myMasonryGridColumn}
            >
              {posts}
            </Masonry>
          ) : (
            <p className={classes.notFound}>Post tidak ditemukan</p>
          )}
        </div>
      </PageBase>
    );
  }
}

export default component;
