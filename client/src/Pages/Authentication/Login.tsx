import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { TriStateCheckbox } from 'primereact/tristatecheckbox';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Main/Logo';
import email_icon from '../../assets/icons/email.svg';
import password_icon from '../../assets/icons/password.svg';
import login_frame from '../../assets/login_frame.png';

const Login = () => {
  return (
    <div className="flex justify-center flex-row gap-12 lg:px-12 md:px-6 px-1 max-h-screen">
      <main className="max-w-[500px] mx-auto w-full py-6 lg:mx-16 md:mx-8">
        <Logo />

        <header className="mt-20">
          <h2 className="font-bold text-3xl">Welcome back</h2>
          <p className="font-medium text-sm mt-2">
            Please enter your details to login into your account.
          </p>
        </header>

        <div className="w-full">
          <section className="mt-12 flex flex-col gap-4">
            <fieldset className="grid w-full items-center gap-1.5">
              <label htmlFor="email">Email</label>
              <div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
                <img src={email_icon} className="" alt="" />
                <InputText
                  id="email"
                  aria-describedby="email-help"
                  className="font-normal px-1 border-none w-full py-2 outline-none shadow-none"
                  placeholder="Enter your email"
                />
              </div>
            </fieldset>

            <fieldset className="grid w-full items-center gap-1.5">
              <label htmlFor="password">Password</label>

              <div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
                <img src={password_icon} className="" alt="" />
                <Password
                  placeholder="Enter your password"
                  toggleMask
                  feedback={false}
                  className="font-normal px-1 border-none shadow-none outline-none w-full py-2"
                />
              </div>
            </fieldset>
          </section>

          <section className="mt-3 flex flex-row justify-between items-center">
            <fieldset className="flex flex-row items-center gap-1">
              <TriStateCheckbox value={true} className="" variant="filled" />
              <label
                htmlFor="remember"
                className="font-light text-xs sm:text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </fieldset>

            <a
              href=""
              className="text-primary focus:underline hover:underline text-xs sm:text-sm"
            >
              Forgotten password?
            </a>
          </section>
          <button className="bg-primary py-2 rounded-md text-white w-full mt-4 mb-2">
            Login
          </button>
          <p className="w-full cursor-default text-center font-normal">
            Don't have an account?{' '}
            <Link
              state={{ from: '/auth/login' }}
              to="/auth"
              className="text-primary focus:underline hover:underline"
            >
              Signup for free
            </Link>
          </p>
        </div>
      </main>
      <div className="h-screen rounded-md overflow-hidden hidden md:block">
        <img
          className="object-cover py-2 h-full w-full"
          src={login_frame}
          alt=""
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Login;
