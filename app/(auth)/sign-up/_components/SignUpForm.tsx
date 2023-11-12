"use client";

import Button from "@/components/ui/Button";
import { photoUrlChecker } from "@/helpers/photoUrlChecker";
import { signUpPost } from "@/lib/signUpPost";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

interface SignInFormData {
  name: string;
  email: string;
  password: string;
  photoUrl: string;
}

const SignUpForm = () => {
  const [formData, setFormData] = useState<SignInFormData>({
    name: "",
    email: "",
    password: "",
    photoUrl: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter()
  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setLoading(true);

      const hasParmitted = photoUrlChecker(formData.photoUrl);

      const data = await signUpPost("/api/auth/register", formData);

      if (hasParmitted) {
        if (data) {
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            password: "",
            photoUrl: "",
          });
          toast.success("Register successfull");
          router.push('/')
        } else {
          setLoading(false);
        }
      } else {
        setLoading(false);
        toast.error(
          "Please paste a photo URL from pexels/unsplash or cloudinary"
        );
      }
    },
    [formData,router]
  );

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-1.5'>
        <h2>Create an account</h2>
        <p className='text-black/50'>Please provide your details to register</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col gap-5 text-lg'
      >
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='name' className='cursor-pointer'>
            Name
          </label>
          <input
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            type='text'
            id='name'
            placeholder='name'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='email' className='cursor-pointer'>
            Email address
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type='email'
            id='email'
            placeholder='hello@example.com'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='password' className='cursor-pointer'>
            Password
          </label>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type='password'
            id='password'
            placeholder='Write your password'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='photoUrl' className='cursor-pointer'>
            Photo URL
          </label>
          <input
            value={formData.photoUrl}
            onChange={(e) =>
              setFormData({ ...formData, photoUrl: e.target.value })
            }
            type='text'
            id='photoUrl'
            placeholder='Inter your photo URL from pexels/unplash/cloudinary'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <Button variant='primary' type='submit' isLoading={loading}>
          Register
        </Button>

        <p>
          <span className='text-black/50'>Already have an account?</span>{" "}
          <Link href='/sign-in' className='link-item'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
