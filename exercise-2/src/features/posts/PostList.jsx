import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { selectAllPosts } from "./postsSlice";
import { parseISO, formatDistanceToNow } from "date-fns";
import ReactionButton from "./ReactionButton";

const PostList = () => {
  const posts = useSelector(selectAllPosts);
  const users = useSelector(selectAllUsers);

  const getPostUserName = ({ userId}) => {
    const postUser = users.find(user => user.id === userId);

    return postUser.name;
  }

  const getCreationDate = ({ date }) => {
    const parsedDate = parseISO(date);
    const dateFromNow = formatDistanceToNow(parsedDate);
    console.log(dateFromNow);

    return `${dateFromNow} ago`;
  }

  const renderedPosts = posts.map(post => (
    <article key={post.id} className="post">
      <h3>{post.title}</h3>
      <h4 className="user">{getPostUserName(post)}</h4>
      <p>
        {post.content.substring(0, 100)}
      </p>
      <span className="timestamp">{getCreationDate(post)}</span>
      <span className="reactions">
        <ReactionButton type="like" content="👍" postId={post.id} />
        <ReactionButton type="dislike" content="👎" postId={post.id} />
        <ReactionButton type="heart" content="❤" postId={post.id} />
      </span>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts.reverse()}
    </section>
  );
};

export default PostList;
