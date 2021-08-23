import { CREATE_POST, REMOVE_POST } from "../actions/actionType";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  posts: {
    items: [],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      console.log(action.data.json);
      const postData = {
        id: uuidv4(),
        post: action.post,
        comment: action.comment,
      };
      return {
        ...state.posts,
        posts: {
          items: [postData, ...state.posts.items],
        },
      };

    case REMOVE_POST:
      let filteredArray = state.posts.items.filter(
        ({ id }) => id !== action.id
      );
      return {
        posts: {
          ...state.posts,
          items: filteredArray,
        },
      };

    default:
      return state;
  }
}
