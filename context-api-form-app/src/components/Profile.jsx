import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Profile = () => {
  const { user, password } = useContext(UserContext);
  return (
    <div className="flex flex-wrap justify-center w-full p-4">
      <p>{user && password ? `Hi ${user}` : `Please login`}</p>
    </div>
  );
};

export default Profile;
