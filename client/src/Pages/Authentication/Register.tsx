import { InputText } from "primereact/inputtext";
import Logo from "../../Components/Main/Logo";
import password_icon from "../../assets/icons/password.svg";
import upload_icon from "../../assets/icons/upload.svg";
import { InputNumber } from "primereact/inputnumber";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { TriStateCheckbox } from "primereact/tristatecheckbox";

const Register = () => {
	const [selectedState, setSelectedState] = useState(null);
	const states = [
		{ name: "Osun", code: "OS" },
		{ name: "Ondo", code: "ON" },
		{ name: "Abia", code: "Ab" },
		{ name: "Kaduna", code: "KA" },
		{ name: "Bauchi", code: "BA" },
	];

	return (
		<div className="lg:px-12 md:px-6 px-1 mb-6">
			{/* <main className="flex-1 grid place-items-center max-w-screen-lg w-full"> */}
			<main className="flex-1 max-w-screen-lg w-full mx-auto py-6">
				<header>
					<div></div>
					<Logo />
				</header>

				<div className="mt-14 w-full">
					<h2 className="font-bold text-3xl w-full text-center">
						Sign up
					</h2>
					<p className="font-medium text-sm mt-2 w-full text-center">
						Please enter your details to create an account
					</p>
				</div>

				<section className="mt-10 w-full">
					<h3 className="font-medium text-2xl w-full text-center">
						Personal information
					</h3>

					<div className="px-16 flex flex-col gap-6 mt-6 mx-auto">
						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="first_name">First name</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="first_name"
										aria-describedby="first_name-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Enter your first name"
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="last_name">Last name</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="last_name"
										aria-describedby="last_name-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Enter your last name"
									/>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="first_name">Email</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="email"
										aria-describedby="email-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Enter your email"
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="last_name">Phone number</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputNumber
										name="emergency_phone_number"
										id="emergency_phone_number"
										className="text-accent font-normal px-1 border-none outline-none py-2 w-full pl-4 pr-6shadow-none"
										placeholder="Enter emergency contact phone number"
										useGrouping={false}
										value={8116661234}
									/>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="first_name">
									Date of birth
								</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<Calendar
										value={new Date()}
										dateFormat="dd/mm/yy"
										className="text-accent font-normal px-1 border-none outline-none py-2 w-full shadow-none"
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="last_name">Gender</label>

								<div className="flex flex-row gap-2">
									<div className="flex flex-row gap-2 py-3 rounded-md border-2 pl-4 pr-6 border-primary items-center">
										<RadioButton
											name="gender"
											value={"Male"}
											checked
											className="outline rounded-full outline-accent"
										/>
										<p className="font-light text-accent ">
											Male
										</p>
									</div>
									<div className="flex flex-row gap-2 py-3 rounded-md border-2 pl-4 pr-6 border-secondary items-center">
										<RadioButton
											name="gender"
											value={"Female"}
											checked={false}
											className="outline rounded-full outline-accent"
										/>
										<p className="font-light text-accent ">
											Female
										</p>
									</div>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="state_of_origin">
									State of origin
								</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>

									<Dropdown
										value={selectedState}
										options={states}
										optionLabel="name"
										editable
										placeholder="Select a State"
										className="w-full md:w-14rem py-2 shadow-none"
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="last_name">Address</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="address"
										aria-describedby="address-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Enter your address"
									/>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="nationality">
									Emergency contact
								</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="emergency_contact"
										aria-describedby="emergency_contact-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Enter your emergency contact"
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="last_name">
									Emergency Phone number
								</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputNumber
										name="emergency_phone_number"
										id="emergency_phone_number"
										className="text-accent font-normal px-1 border-none outline-none py-2 w-full shadow-none"
										placeholder="Enter emergency contact phone number"
										useGrouping={false}
										value={8116661234}
									/>
								</div>
							</fieldset>
						</section>
					</div>
				</section>

				<section className="mt-16 w-full">
					<h3 className="font-medium text-2xl w-full text-center">
						Medical information
					</h3>
					<div className="px-16 flex flex-col gap-6 mt-6">
						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="medical_condition">
									Medical condition
								</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="medical_condition"
										aria-describedby="medical-condition"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Select any that apply"
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="current_medication">
									Current medications
								</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="current_medications"
										aria-describedby="current_medications"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Select any that apply"
									/>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="vaccination_history">
									Vaccination history
								</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="vaccination_history"
										aria-describedby="vaccination_history"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Select vaccines received"
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="past_procedures">
									Past procedures or Surgeries
								</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="past_procedures"
										aria-describedby="past_procedures"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="e.g: Appendectomy"
									/>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="allergies">Allergies</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="allergies"
										aria-describedby="allergies"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="e.g: Peanuts, Penicillin, Pollen..."
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="blood_type">Blood type</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="blood_type"
										aria-describedby="blood_type"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="e.g:  A positive (A+), AB negative (AB-)"
									/>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="family_history">
									Family medical history
								</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputTextarea
										id="family_history"
										aria-describedby="family_history"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="e.g: Father had heart disease."
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="past_medical-history">
									Past medical history
								</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputTextarea
										id="past_medical-history"
										aria-describedby="past_medical-history"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="e.g: Father had heart disease."
									/>
								</div>
							</fieldset>
						</section>
					</div>
				</section>

				<section className="mt-16 w-full">
					<h3 className="font-medium text-2xl w-full text-center">
						Identification and Verification
					</h3>

					<div className="px-16 flex flex-col gap-6 mt-6">
						<section className="flex flex-row gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="identification_type">
									Identification type
								</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="identification_type"
										aria-describedby="identification_type"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="e.g: Birth certificate..."
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="identification_number">
									Identification number
								</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									<img
										src={password_icon}
										className=""
										alt=""
									/>
									<InputText
										id="identification_number"
										aria-describedby="identification_number"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Enter ID number"
									/>
								</div>
							</fieldset>
						</section>
						<section>
							<label htmlFor="identification_type">
								Picture or a scanned copy of identification
								document
							</label>
							<div className="w-full h-[160px] border border-accent rounded-md flex flex-col gap-1.5 items-center justify-center mt-2">
								<img
									className="mx-auto"
									src={upload_icon}
									alt="Upload Identification document icon"
								/>
								<p className="font-normal text-accent">
									<span className="font-semibold text-primary">
										Click to upload
									</span>{" "}
									or drag and drop
								</p>
								<span className="text-gray-400 text-sm font-light w-full text-center">
									SVG, PNG, JPG or GIF (max. 10MB)
								</span>
							</div>
						</section>
					</div>
				</section>

				<section className="mt-16 w-full px-16 flex flex-col gap-1 ">
					<div className="flex flex-row items-center gap-4">
						<TriStateCheckbox value={true} />
						<p className="text-accent">
							I acknowledge that I have reviewed and agreed to the{" "}
							<span className="text-primary">privacy policy</span>
						</p>
					</div>
					<div className="flex flex-row items-center gap-4">
						<TriStateCheckbox value={true} />
						<p className="text-accent">
							I consent to sharing my health information with my
							healthcare providers within the HealthSync network
						</p>
					</div>
					<div className="flex flex-row items-center gap-4">
						<TriStateCheckbox value={true} />
						<p className="text-accent">
							I consent to the use and disclosure of my health
							information for treatment purposes
						</p>
					</div>

					<button className="bg-primary py-2 rounded-md text-white w-full mt-8 mb-2">
						Submit and Create account
					</button>
				</section>
			</main>
		</div>
	);
};

export default Register;
