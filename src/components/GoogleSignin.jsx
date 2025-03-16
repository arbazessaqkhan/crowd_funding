import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // Use named import

const clientId = "598929906107-00krth117pbqqt9onuh3k10nci70i7fp.apps.googleusercontent.com"; // Replace with your actual Client ID

export default function GoogleSignin() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential); // Use jwtDecode()
          console.log("User Info:", decoded);
          alert(`Welcome, ${decoded.name}`);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
}
