import SignInForm from "./SignInForm";
import SignInPicture from "./SignInPicture";

const SignIn = () => {
  return <section className='section-p  container grid h-full w-full lg:grid-cols-2 grid-cols-1 items-center gap-20'>
    <SignInPicture/>
    <SignInForm/>
  </section>;
};

export default SignIn;
