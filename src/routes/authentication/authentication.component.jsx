// import { useEffect } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
// import { getRedirectResult } from "firebase/auth";

const Authentication = () => {
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

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   // console.log(response);
  // };
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log(user);
  //   // console.log(response);
  // };
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in With Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
