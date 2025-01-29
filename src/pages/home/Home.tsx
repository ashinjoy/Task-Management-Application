import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { googleSignIn } from "../../services/auth/authActions";
import { useNavigate } from "react-router-dom";
import { GoogleIcon } from "../../components/svg/GoogleIcon";
import { Circle1 } from "../../components/svg/Circle1";
import { Circle2 } from "../../components/svg/Circle2";
import { Logo } from "../../components/svg/Logo";
import { Circle3 } from "../../components/svg/Circle3";
import { MainCircle } from "../../components/svg/MainCircle";
import toast from "react-hot-toast";
import { resetDefault } from "../../services/auth/authSlice";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { message } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogin = async () => {
    dispatch(googleSignIn());
  };

  useEffect(() => {
    if (message == "You are successfully logged in") {
      toast.success(message);
      setTimeout(() => {
        navigate("/tasks", { replace: true });
      }, 2000);
    }
    return () => {
      dispatch(resetDefault());
    };
  }, [message]);
  return (
    <>
      <div className="min-w-screen min-h-screen bg-[#FFF9F9] mx-auto  p-1 md:p-5 relative">
        <div className=" min-h-screen flex flex-col items-center justify-center space-y-10 md:flex-row md:justify-start md ">
          <div className="w-full flex justify-end absolute top-0 right-0 md:hidden ">
            <Circle1 />
          </div>
          <div className="flex justify-start absolute  top-[4rem] left-0 md:hidden">
            <Circle2 />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:w-[45%] ">
            <div className="flex gap-2">
              <Logo />
              <h1 className="font-bold text-2xl text-[#7B1984]">TaskBuddy</h1>
            </div>
            <p className="text-center max-w-[25rem] break-words tracking-tight font-medium">
              Streamline your workflow and track progress effortlessly with our
              all-in-one task management app.
            </p>

            <button
              className="opacity-100 bg-[#292929] min-w-[15rem] text-white p-2 rounded-xl flex justify-center gap-x-3"
              onClick={handleLogin}
            >
              <GoogleIcon />
              Continue with Google
            </button>
          </div>
          <div className="flex justify-center md:hidden">
            <Circle3 />
          </div>
          <div className=" w-[50%] hidden md:block  absolute right-0 ">
            <MainCircle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
