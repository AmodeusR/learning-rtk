import { useDispatch, useSelector } from "react-redux";
import { addReaction, selectAllPosts } from "./postsSlice";

const ReactionButton = ({ type, content, postId }) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const currentPost = posts.find(post => post.id === postId);

  return (
    <button className="reaction-button" onClick={() => dispatch(addReaction({type, postId}))}>
      {content}
      <span className="reaction-count">{currentPost.reactions[type]}</span>
    </button>
  );
};

export default ReactionButton;
