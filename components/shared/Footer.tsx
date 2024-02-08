const Footer = () => {
  return (
    <footer className='footer bg-black grid lg:grid-cols-5 grid-cols-1 h-full w-full gap-5'>
      <nav className='flex flex-col text-white space-y-3 h-full w-full p-10'>
        <h6 className='footer-title text-lg uppercase font-semibold mb-5'>
          Services
        </h6>
        <a className='link link-hover text-gray/70'>Branding</a>
        <a className='link link-hover text-gray/70'>Design</a>
        <a className='link link-hover text-gray/70'>Marketing</a>
        <a className='link link-hover text-gray/70'>Advertisement</a>
      </nav>
      <nav className='flex flex-col text-white space-y-2  p-10'>
        <h6 className='footer-title text-lg uppercase font-semibold mb-5'>
          Company
        </h6>
        <a href="about" className='link link-hover text-gray/70'>About us</a>
        <a href="specialists"  className='link link-hover text-gray/70'>Specialists</a>
        <a href="contact"  className='link link-hover text-gray/70'>Contact</a>
        <a href="sign-in"  className='link link-hover text-gray/70'>Login</a>
      </nav>
      <nav className='flex flex-col text-white space-y-2  p-10'>
        <h6 className='footer-title text-lg uppercase font-semibold mb-5'>
          Legal
        </h6>
        <a className='link link-hover text-gray/70'>Terms of use</a>
        <a className='link link-hover text-gray/70'>Privacy policy</a>
        <a className='link link-hover text-gray/70'>Cookie policy</a>
      </nav>
      <form className='lg:col-span-2 text-white space-y-2  p-10'>
        <h6 className='footer-title text-lg uppercase font-semibold mb-5'>
          Newsletter
        </h6>
        <fieldset className='form-control space-y-3 w-80'>
          <label className='label'>
            <span className='label-text text-gray/70'>Enter your email address</span>
          </label>
          <div className=' flex justify-center items-center max-md:w-[80%] w-full'>
            <input
              type='text'
              placeholder='username@site.com'
              className='input outline border-none text-black h-full w-full py-3  px-4 rounded-tl-lg rounded-bl-lg '
            />
            <button type="submit" className='btn  bg-blue block px-4 py-3 rounded-tr-lg rounded-br-lg '>
              Subscribe
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
