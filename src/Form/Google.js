import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function Google() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <GoogleLogin
        onSuccess={(response) => console.log('Login Success:', response)}
        onError={() => console.log('Login Failed')}
      />
    </GoogleOAuthProvider>
  );
}

export default Google;
