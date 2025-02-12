import { GoogleLogin } from "@react-oauth/google";

function Google() {
  return (
    <div className="w-72 p-2 my-2 bg-white rounded-md text-center">
      <GoogleLogin
        onSuccess={(response) => console.log("Login Success:", response)}
        onError={() => console.log("Login Failed")}
        className="border-0"
      />
    </div>
  );
}

export default Google;
