import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 text-gray-700 text-lg font-medium">
        Loading...
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className="my-11 flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full bg-gradient-to-bl from-green-300 to-blue-400 text-center">
          <img
            src={user.picture}
            alt={user.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h2>
          <p className="text-gray-800">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user.email}
            </a>
          </p>
        </div>
      </div>
    )
  );
};

export default UserProfile;
