import { FC } from "react";
import { IPost } from "./Main";
import { auth } from "../../config/firebase";
interface Props {
  post: IPost;
}

export const Post: FC<Props> = (props) => {
  const { post } = props;

  return (
    <div className="post">
      <div className="uploader-profile">
        <img src={auth.currentUser?.photoURL || ""} alt="" />
        <p>{post.username}</p>
      </div>

      <div className="post-title">
        <h2>
          <i>Todo:</i> {post.title}
        </h2>
      </div>

      <div className="post-description">
        <p>{post.description}</p>
      </div>
    </div>
  );
};
