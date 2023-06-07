import "./sign-in-form.styles.scss";
import { useState } from "react";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utlis";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("the password is wrong");
          break;
        case "auth/user-not-found":
          alert("email is not registres");
          break;
        default:
          console.log(error);
      }
      console.log(error);
    }
  };

  console.log(formFields);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    // console.log(response);
  };
  return (
    <div className="sign-up-container">
      <h1>Already have an account ? </h1>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        {/* <Button type="submit" buttonType="google">
          Simpan
        </Button> */}
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
