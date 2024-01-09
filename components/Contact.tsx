import Image from "next/image";

const Contact = () => {
  return (
    <section className='container section-p mt-10'>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 bg-black/5'>
        <div className='p-10'>
          <div className='bg-white rounded-2xl space-y-2 w-full h-full overflow-hidden py-5 px-10'>
            <div className='space-y-1'>
              <span>Get in Touch</span>
              <h3 className='text-4xl font-thin'>
                Let's chat, Reach Out to Us
              </h3>
              <h6 className='text-sm'>
                Have quations or feedback?We are here to help.Send us a
                message,and we'll respond within 24 hours
              </h6>
            </div>
            <div className='flex gap-5 w-full'>
              <div className='space-y-2'>
                <label htmlFor='firstname'>First Name</label>
                <input
                  type='text'
                  id='firstname'
                  placeholder='First name'
                  required
                  className='outline-none py-3 w-full px-6 rounded-lg border-2 bg-black/10 border-white focus:border-2 focus:border-black eq'
                />
              </div>
              <div className=' space-y-2'>
                <label htmlFor='lastname'>Last Name</label>
                <input
                  type='text'
                  id='lastname'
                  placeholder='Last name'
                  required
                  className='outline-none w-full py-3 px-6 rounded-lg border-2 bg-black/10 border-white focus:border-2 focus:border-black eq'
                />
              </div>
            </div>
            <div className=' flex flex-col gap-2'>
              <label htmlFor='email'>Eamil Address</label>
              <input
                type='email'
                id='email'
                placeholder='Email address'
                required
                className='outline-none py-3 px-6 rounded-lg border-2 bg-black/10 border-white focus:border-2 focus:border-black eq'
              />

              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                id='message'
                cols={30}
                rows={7}
                className='outline-none py-3 resize-none px-6 rounded-lg border-2 bg-black/10 border-white focus:border-2 focus:border-black eq'
              placeholder="Your message here"></textarea>
            </div>
          </div>
        </div>
        {/*--------  */}
        <div className="flex flex-col gap-5 h-full w-full overflow-hidden  p-10 ">
          <div className="h-2/3 w-full">
            <Image
              src='https://images.pexels.com/photos/190168/pexels-photo-190168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='contact image'
              priority
              height={720}
              width={1020}
              className='h-full w-full object-cover rounded-2xl'
            />
          </div>
          <div>
            <div className="w-full px-2 py-6 bg-black/5 rounded-2xl">
              <h3 className="text-4xl">arinaspa@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
