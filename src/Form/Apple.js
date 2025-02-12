import AppleSignin from "react-apple-signin-auth";

function Apple() {
  return (
    <AppleSignin
    authOptions={{
      clientId: "com.example.web", // Replace with your Apple Client ID
      scope: "email name",
      redirectURI: "https://yourdomain.com/callback", // Your redirect URL
      state: "state",
      nonce: "nonce",
      usePopup: true, // Recommended for Next.js
    }}
    uiType="dark"
    className="w-72 p-2"
    onSuccess={(response) => console.log("Apple sign-in success:", response)}
    onError={(error) => console.error("Apple sign-in error:", error)}
  />
  );
}

export default Apple;
