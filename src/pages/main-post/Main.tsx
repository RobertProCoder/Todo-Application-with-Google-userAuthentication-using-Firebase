import { getDocs, collection, query, where } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState, FC } from "react";
import { Post } from "./Post";
import { useAuthState } from "react-firebase-hooks/auth";

export interface IPost {
  description: string;
  title: string;
  userId: string;
  username: string;
  id: string;
}
export const Main: FC = () => {
  const [user] = useAuthState(auth);
  const postsRef = collection(db, "posts");
  const postsDoc = query(postsRef, where("userId", "==", user?.uid));
  const [postsList, setPostsList] = useState<IPost[] | null>(null);

  const getPosts = async () => {
    try {
      const data = await getDocs(postsDoc);
      setPostsList(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IPost[]
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      {postsList?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};
