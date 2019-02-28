import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import './style.scss';
import Post from './components/Post';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: './images/logo.svg',
        name: 'Mr CopyCat',
        date: 'há 30 minutos',
        content:
          'Purus sed nulla ipsum mollis enim aenean tempus egestas quis, in consequat interdum semper sed sodales vel. orci ad velit a mauris elit fermentum orci enim ipsum viverra, blandit sapien aliquam feugiat primis sapien ut massa faucibus, consequat ante conubia orci aliquet ante cursus litora habitant. orci luctus posuere sagittis congue dolor ultrices at, aptent tempus rhoncus nostra torquent feugiat pellentesque, integer iaculis quis semper rhoncus placerat. eros volutpat torquent nulla morbi ad tempus pulvinar litora, praesent ipsum senectus enim donec ad justo ultricies posuere, hendrerit praesent porttitor tellus aptent scelerisque facilisis.',
      },
      {
        id: 2,
        avatar: './images/Adrian.jpg',
        name: 'Adrian Grahl Pereira',
        date: 'há 10 minutos',
        content: 'Hello there, this is just a second post!',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <div className="posts">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
