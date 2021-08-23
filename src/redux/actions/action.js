import { CREATE_POST,  REMOVE_POST } from "./actionType";
import ApiServer from "../../requestToServer/serverApi";

export function createPost(post, comment, data) {
  return {
    type: CREATE_POST,
    post,
    comment,
    data,
  };
}
export function removePost(id) {
  return {
    type: REMOVE_POST,
    id,
  };
}

export const thunkObjForData = (post, comment) => {
  return async (dispatch) => {
    try {
      const response = await ApiServer.addPost(post, comment);
      dispatch(createPost(post, comment, response.data));
    } catch {
      console.log("error");
    }
  };
};
