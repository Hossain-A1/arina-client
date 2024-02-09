const Success = () => {
  return (
    <div className="  flex flex-col items-center">
      <div className='p-20 lg:w-[30rem] h-full w-full lg:h-[26rem] rounded-2xl max-md:p-5 bg-white shadow-md shadow-black flex justify-center items-center flex-col gap-3'>
        <h2>Your payment has successfully!</h2>
        <span className="text-6xl">✔️</span>
      </div>
    </div>
  );
};

export default Success;
