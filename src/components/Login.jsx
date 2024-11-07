import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/auth_service'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import Input from "./Input"
import Button from "./Button"
import logo from "../assets/Logo.jpg"
import loading from "../assets/loading.gif"

function Login() {

  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  async function handleLogin(data) {
    setError("");
    setIsDialogOpen(true)
    try {
      const session = await authService.loginUser(data)
      if (session) {
        const userData = await authService.getCurrentUser();
        setIsDialogOpen(false)
        if (userData) {
          dispatch(login(userData))
          navigate('/')
        }
      } else {
        window.alert("wrong login credentials");
        setIsDialogOpen(false);
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setIsDialogOpen(false);
    }
  }

  return (
    <>
      <dialog className={`h-screen w-screen flex justify-center items-center bg-slate-50/30 ${isDialogOpen ? "" : 'hidden'}`}>
        <div className="w-full flex flex-col justify-center items-center">
          <img src={loading} alt="" />
          <h1 className="text-slate-900 text-3xl font-bold">PLEASE WAIT </h1>
        </div>

      </dialog>
      <div
        className='flex items-center justify-center w-full'
      >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
              <img src={logo} width="100%" />
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
          <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
            <Link
              to="/signup"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
          </p>
          {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
          <form onSubmit={handleSubmit(handleLogin)} className='mt-8'>
            <div className='space-y-5'>
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  }
                })}
              />
              <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                })}
              />
              <Button
                type="submit"
                className="w-full"
              >Sign in</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login