import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "@/components/auth/login-form";
import CardWrapper from "@/components/auth/card-wrapper";
import GoogleButton from "@/components/auth/google-button";

function Login() {
  return (
    <CardWrapper title={"Sign in"}>
      <div className="w-full flex flex-col items-center justify-center gap-8">
        <LoginForm />

        <div className="flex items-center justify-center w-full">
          <span className="w-2/5 h-[2px] bg-slate-300 rounded-full"></span>
          <p className="w-1/5 text-center font-medium text-slate-700">or</p>
          <span className="w-2/5 h-[2px] bg-slate-300 rounded-full"></span>
        </div>

        <GoogleButton className="w-3/4 drop-shadow-md text-lg">
          <Button className="w-full" variant="outline">
            <FcGoogle className="mr-3 w-6 h-6" />
            Continue with Google
          </Button>
        </GoogleButton>

        <p>
          No account?{" "}
          <Link
            className="text-slate-700 hover:text-slate-800"
            href={"/auth/register"}
          >
            Register
          </Link>
        </p>
      </div>
    </CardWrapper>
  );
}

export default Login;
