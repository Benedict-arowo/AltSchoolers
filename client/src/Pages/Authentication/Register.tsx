import Logo from "@/Components/Main/Logo";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/Components/ui/popover";
import password_icon from "@/assets/icons/password.svg";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useState } from "react";
import { Calendar } from "@/Components/ui/calendar";

const Register = () => {
	const [date, setDate] = useState<Date>();
	return (
		<div>
			<header>
				<div></div>
				<Logo />
			</header>

			<main>
				<div>
					<h2 className="font-bold text-3xl">Sign up</h2>
					<p className="font-medium text-sm mt-2">
						Please enter your details to create an account
					</p>
				</div>

				<section>
					<h3 className="font-medium text-2xl">
						Personal information
					</h3>

					<div className="px-16 flex flex-col gap-6">
						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<Label htmlFor="first_name">First name</Label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<Input
										type="text"
										id="first_name"
										className="text-primary font-normal px-1 border-none outline-none"
										placeholder="Enter your first name"
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<Label htmlFor="last_name">Last name</Label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<Input
										type="text"
										id="last_name"
										className="text-primary font-normal px-1 border-none outline-none"
										placeholder="Enter your last name"
									/>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<Label htmlFor="first_name">Email</Label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<Input
										type="email"
										id="email"
										className="text-primary font-normal px-1 border-none outline-none"
										placeholder="Enter your email"
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<Label htmlFor="last_name">Phone number</Label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<Input
										type="password"
										id="last_name"
										className="text-primary font-normal px-1 border-none outline-none"
										placeholder="Enter your phone number"
									/>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<Label htmlFor="first_name">
									Date of birth
								</Label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant={"outline"}
												className={cn(
													"w-full justify-start text-left font-normal",
													!date &&
														"text-muted-foreground"
												)}>
												<CalendarIcon className="mr-2 h-4 w-4" />
												{date ? (
													format(date, "PPP")
												) : (
													<span>Pick a date</span>
												)}
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0">
											<Calendar
												mode="single"
												selected={date}
												onSelect={setDate}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<Label htmlFor="last_name">Gender</Label>

								<div className="flex flex-row gap-2">
									<div className="flex flex-row gap-2 py-2 rounded-md border-2 px-4 border-secondary">
										<input
											type="radio"
											name="gender"
											id="male"
										/>
										<p className="font-light text-accent">
											Male
										</p>
									</div>
									<div className="flex flex-row gap-2 py-2 rounded-md border-2 px-4 border-secondary">
										<input
											type="radio"
											name="gender"
											id="female"
										/>
										<p className="font-light text-accent">
											Female
										</p>
									</div>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<Label htmlFor="nationality">Nationality</Label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<Input
										type="email"
										id="email"
										className="text-primary font-normal px-1 border-none outline-none"
										placeholder="Enter your email"
									/>
									{/* <option value="country"></option> */}
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<Label htmlFor="last_name">Address</Label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<Input
										type="text"
										id="address"
										className="text-primary font-normal px-1 border-none outline-none"
										placeholder="Enter your address"
									/>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<Label htmlFor="nationality">
									Emergency contact
								</Label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<Input
										type="text"
										id="emergency_contact"
										className="text-primary font-normal px-1 border-none outline-none"
										placeholder="Enter emergency contact name"
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<Label htmlFor="last_name">Phone number</Label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<Input
										type="number"
										id="emergency_phone_number"
										className="text-primary font-normal px-1 border-none outline-none"
										placeholder="Enter emergency contact phone number"
									/>
								</div>
							</fieldset>
						</section>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Register;
