import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logOut = async () => {
    await signOut(auth);
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="items">
        {!user ? (
          <p>
            <Link to="/login" className="menus">
              Login
            </Link>
          </p>
        ) : (
          <>
            <p>
              <Link to="/" className="menus">
                Home
              </Link>
            </p>
            <p>
              <Link to="/createpost" className="menus">
                Create Post
              </Link>
            </p>
          </>
        )}
      </div>
      <div className="profile">
        {user && (
          <>
            <img src={user?.photoURL || ""} alt="" />
            <button onClick={logOut} className="sign-out">
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};
