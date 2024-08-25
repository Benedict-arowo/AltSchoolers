import Logo from "@/Components/Main/Logo";
import { Button } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Link } from "react-router-dom";
import login_frame from "@/assets/login_frame.png";
import password_icon from "@/assets/icons/password.svg";
import email_icon from "@/assets/icons/email.svg";

const Login = () => {
	return (
		<div className="flex justify-center flex-row gap-0 px-12">
			<main className="flex-1  py-6 mx-16">
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
							<Label htmlFor="email">Email</Label>
							<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
								<img src={email_icon} className="" alt="" />
								<Input
									type="email"
									id="email"
									className="text-primary font-normal px-1 border-none"
									placeholder="Enter your email"
								/>
							</div>
						</fieldset>

						<fieldset className="grid w-full items-center gap-1.5">
							<Label htmlFor="password">Password</Label>

							<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
								<img src={password_icon} className="" alt="" />
								<Input
									type="password"
									id="password"
									className="text-primary font-normal px-1 border-none outline-none"
									placeholder="Enter your password"
								/>
							</div>
						</fieldset>
					</section>

					<section className="mt-3 flex flex-row justify-between items-center">
						<fieldset className="flex flex-row gap-1">
							<Checkbox className="" />
							<Label
								htmlFor="remember"
								className="font-light text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
								Remember me
							</Label>
						</fieldset>

						<a
							href=""
							className="text-primary focus:underline hover:underline text-sm">
							Forgotten password?
						</a>
					</section>
					<Button className="bg-primary text-white w-full my-2">
						Login
					</Button>
					<p className="w-full cursor-default text-center font-normal">
						Don't have an account?{" "}
						<Link
							to="/register"
							className="text-primary focus:underline hover:underline">
							Signup for free
						</Link>
					</p>
				</div>
			</main>
			<img
				className="flex-1 hidden md:block max-h-screen object-cover py-2"
				src={login_frame}
				alt=""
				draggable="false"
			/>
		</div>
	);
};

export default Login;
