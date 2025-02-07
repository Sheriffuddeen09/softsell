import FacebookLogin from 'react-facebook-login';

function Facebook() {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <FacebookLogin
      appId="1311661496651964"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
    />
  );
}

export default Facebook;
