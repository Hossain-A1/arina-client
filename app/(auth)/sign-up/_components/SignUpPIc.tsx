import Overlay from '@/components/ui/Overlay';
import Image from 'next/image';

const SignUpPic = () => {
  return (
    <div className='relative h-[32rem] w-full overflow-hidden'>
      <Image
        src='https://images.pexels.com/photos/5938592/pexels-photo-5938592.jpeg?auto=compress&cs=tinysrgb&w=600'
        alt='Sign in picture'
        width={720}
        height={1280}
        priority
        className='h-full w-full object-contain'
      />
      <Overlay />
      <div className='absolute bottom-0 left-0 right-0 top-0 z-[2] flex h-full w-full items-end p-20 text-center text-white'>
        <h3>“Everything has beauty, but not everyone sees it.” — Confucius</h3>
      </div>
    </div>
  );
};

export default SignUpPic;