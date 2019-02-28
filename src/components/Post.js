import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = (props) => {
  const {
    data: {
      avatar, name, date, content,
    },
  } = props;
  return (
    <Fragment>
      <div className="post">
        <PostHeader avatar={avatar} name={name} date={date} />
        <hr />
        <p className="content">{content}</p>
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
