import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("You need to fill in the fields!");
      return;
    }
    
    dispatch(createPost(title, content));
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
          <label htmlFor="post-content">Content</label>
          <textarea
            id="post-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>

        <button className="form-button" type="submit">
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
