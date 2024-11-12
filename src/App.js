import React, { Component, Fragment } from 'react';
import './App.css';

import { getPosts, getAlbums } from './services/apis';

import PostItem from './components/posts/PostItem';
import AlbumItem from './components/albums/AlbumItem';

import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postsLoading: false,
      albums: [],
      albumsLoading: false,
    }
  }

  componentDidMount() {
    this.setState({ postsLoading: true, albumsLoading: true });
    getPosts()
      .then(response => response.json())
      .then(data => {
        // Time out is just to simulate that different loaders can be managed.
        setTimeout(() => {
          this.setState({ posts: data, postsLoading: false });
        }, 2000);
      })
      .catch(err => console.log('erro -> ', err));

    getAlbums()
      .then(response => response.json())
      .then(data => {
        // Time out is just to simulate that different loaders can be managed.
        setTimeout(() => {
          this.setState({ albums: data, albumsLoading: false });
        }, 3000)
      })
      .catch(err => console.log('erro -> ', err));
  }

  render() {
    return (
      <Fragment>
        <div className="app-wrapper">
          <div className="app-items post-wrapper">
            <h1>Posts</h1>
            {
              this.state.postsLoading ?
                <img alt="Loading..." title="Loading..." src={logo} className="loader" />
                :
                <Fragment>
                  {
                    this.state.posts.length > 0 ?
                      <Fragment>
                        {
                          this.state.posts.map((post) => {
                            return (
                              <PostItem key={post.id} data={post} />
                            )
                          })
                        }
                      </Fragment>
                      :
                      <span>No Post Available</span>
                  }
                </Fragment>
            }
          </div>
          <div className="app-items album-wrapper">
            <h1>Albums</h1>
            {
              this.state.albumsLoading ?
                <img alt="Loading..." title="Loading..." src={logo} className="loader" />
                :
                <Fragment>
                  {
                    this.state.albums.length > 0 ?
                      <Fragment>
                        {
                          this.state.albums.map((album) => {
                            return (
                              <AlbumItem key={album.id} data={album} />
                            )
                          })
                        }
                      </Fragment>
                      :
                      <span>No Album Available</span>
                  }
                </Fragment>
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
