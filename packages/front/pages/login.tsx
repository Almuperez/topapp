import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

const Login = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div style={{ padding: "20px 0", textAlign: "center" }}>
      {!user && (
        <a
          style={{ margin: "5px" }}
          href="/api/auth/login"
          className="btn btn-primary"
        >
          Login
        </a>
      )}
      {user && (
        <>
          <img alt="" src={user.picture} width="38" className="rounded" />
          <a
            style={{ margin: "5px" }}
            href="/api/auth/logout"
            className="btn btn-primary"
          >
            Logout {user.email}
          </a>
        </>
      )}
    </div>
  );
};

export default Login;
