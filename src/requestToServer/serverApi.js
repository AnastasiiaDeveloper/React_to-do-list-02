import axios from "axios";

class PostApiUserPost {
  // url = "https://documenter.getpostman.com/view/1917440/RzteTChV";
  static url = "https://httpbin.org";

  static async addPost(p, c) {
    return await axios.post(
      `${this.url}/post`,
      { post: p, comment: c },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
export default PostApiUserPost;
