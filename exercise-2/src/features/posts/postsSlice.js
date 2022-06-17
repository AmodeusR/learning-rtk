import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 2,
    title: "The power of redux",
    content: "Yes, it's quite powerful and handy, you should try it out",
    date: sub(new Date(), {days: 4}).toISOString(),
    userId: 2,
    reactions: {
      like: 5,
      dislike: 1,
      heart: 2
    }
  },
  {
    id: 1,
    title: "My first post, I think",
    content: "I'm here just trying things out, y'know",
    userId: 0,
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
      like: 0,
      dislike: 0,
      heart: 0
    }
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    createPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare(title, content, userId, date) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date,
            reactions: {
              thumbsUp: 0,
              thumbsDown: 0,
              heart: 0
            }        
          },
        };
      },
    },
    addReaction: (state, action) => {
      const { postId, type: reaction } = action.payload;
      const reactedPost = state.find(post => post.id === postId);

      if (reactedPost) {
        reactedPost.reactions[reaction]++;
      }
    }
  },
});

export const { createPost, addReaction } = postsSlice.actions;
export default postsSlice.reducer;

// Selectors

export const selectAllPosts = (state) => state.posts;
