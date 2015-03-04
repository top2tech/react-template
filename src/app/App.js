/** @jsx React.DOM */
var React = require('react');
var CommentBox = require('./CommentBox.js');

React.render(
  <CommentBox url="comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
	
module.exports = App;
