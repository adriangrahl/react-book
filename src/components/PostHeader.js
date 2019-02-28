import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
  const { avatar, name, date } = props;

  return (
    <div className="post-header">
      <img src={avatar} alt="avatar" />
      <div className="post-details">
        <div className="post-deatils-name">{name}</div>
        <div className="post-deatils-date">{date}</div>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default PostHeader;
