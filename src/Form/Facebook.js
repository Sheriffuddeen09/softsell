import FacebookLogin from "react-facebook-login";

function Facebook() {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="w-72 p-2 mb-2 -mt-1 bg-white border border-black rounded-md text-center">
      <FacebookLogin
        appId="1311661496651964"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="w-full text-black font-medium"
      />
    </div>
  );
}

export default Facebook;
