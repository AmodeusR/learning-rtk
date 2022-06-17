import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { createPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState(null);

  const canCreatePost = Boolean(title && content && userId);
  const users = useSelector(selectAllUsers);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const handleSubmission = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("You need to fill in the fields!");
      return;
    }

    const date = new Date().toISOString();
    
    dispatch(createPost(title, content, Number(userId), date));
    setTitle("");
    setContent("");
  };

  return (
    <section>
      <h2>Post Form</h2>
      <form onSubmit={handleSubmission}>
        <div className="input-field">
          <label htmlFor="post-title">Title</label>
          <input
            type="text"
            id="post-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label htmlFor="post-title">User</label>
          <select
            type="text"
            id="post-title"
            value={userId || ""}
            onChange={(e) => setUserId(e.target.value)}
          >
            <option value=""></option>
            {userOptions}
          </select>
        </div>

        <div className="input-field">
          <label htmlFor="post-content">Content</label>
          <textarea
            id="post-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button
          className={`form-button ${!canCreatePost && "is-disabled"}`}
          type="submit"
        >
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
