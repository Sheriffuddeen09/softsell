import AppleSignin from "react-apple-signin-auth";

function Apple() {
  return (
    <AppleSignin
      clientId="YOUR_APPLE_SERVICE_ID"
      redirectURI="https://yourdomain.com/callback"
      scope="email name"
      usePopup={true}
    />
  );
}

export default Apple;
