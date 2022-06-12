import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "My first post, I think", content: "I'm here just trying things out, y'know" },
  { id: 2, title: "The power of redux", content: "Yes, it's quite powerful and handy, you should try it out" }
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: {
    reducer: (state, action) => {
      state.push(action.payload);
    },
    prepare(title, content) {
      return {
        payload: {
          id: nanoid(),
          title,
          content
        }
      }
    }
  },
  }
});

export const selectAllPosts = (state) => state.posts;

export const { createPost } = postsSlice.actions;
export default postsSlice.reducer;