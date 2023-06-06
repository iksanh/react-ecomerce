// import { useEffect } from "react";
import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utlis";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
// import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  //using redirect for store data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //     // console.log(response);
  //     // createUserDocumentFromAuth(response.user);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   console.log("Hallo");
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log(user);
  //   // console.log(response);
  // };
  return (
    <>
      <div>
        <h1>Sign In</h1>
        <button onClick={logGoogleUser}>Sign in With Google</button>
        <SignUpForm />
        {/* <button onClick={signInWithGoogleRedirect}>
        Sign in With Google Redirect
      </button> */}
      </div>
    </>
  );
};

export default SignIn;
