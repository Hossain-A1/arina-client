import SignUpForm from "./SignUpForm";
import SignUpPic from "./SignUpPIc";

const SignUp = () => {
  return <section className='section-p  container grid h-[calc(100vh-5rem)] grid-cols-2 items-center gap-20'>
    <SignUpPic/>
    <SignUpForm/>
  </section>;
};

export default SignUp;
