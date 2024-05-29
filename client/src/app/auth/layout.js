import Image from "next/image";
import loginBg from "/public/login_bg.jpg";

function AuthLayout({ children }) {
  return (
    <section className="bg-slate-50">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 justify-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-7">
          <Image
            alt="Image with notes in Auth page"
            src={loginBg}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        </section>

        {children}
      </div>
    </section>
  );
}

export default AuthLayout;
