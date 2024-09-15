import { InputText } from "primereact/inputtext";
import Logo from "../../Components/Main/Logo";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import UploadFile from "../../Components/Authentication/UploadFile";
import validationSchema from "../../Components/Authentication/ValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, HeartPulse, IdCard, Syringe } from "lucide-react";
import { FaIdBadge } from "react-icons/fa";
import { Dialog } from "primereact/dialog";
import Congratulations from "../../Components/Authentication/Congratulations";

const defaultValues: FormData = {
	firstName: "",
	lastName: "",
	email: "",
	phoneNumber: undefined,
	dob: new Date(),
	gender: "Male",
	stateOfOrigin: {
		code: "",
		name: "",
	},
	address: "",
	emergencyContact: "",
	emergencyPhoneNumber: undefined,
	medicalCondition: "",
	currentMedications: "",
	vaccinationHistory: "",
	pastProcedures: "",
	allergies: "",
	bloodType: "",
	familyHistory: "",
	pastMedicalHistory: "",
	identificationType: "",
	identificationNumber: "",
};

const RegisterUser = () => {
	const [formData, setFormData] = useState<FormData>(defaultValues);
	const { state } = useLocation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		resolver: yupResolver(validationSchema) as any,
	});
	const [showCongratulations, setShowCongratulations] = useState(false);

	const states = [
		{ name: "Osun", code: "OS" },
		{ name: "Ondo", code: "ON" },
		{ name: "Abia", code: "Ab" },
		{ name: "Kaduna", code: "KA" },
		{ name: "Bauchi", code: "BA" },
	];

	const updateFormData = (
		key: string,
		value: string | number | object | Date
	) => {
		setFormData((prev) => ({ ...prev, [key]: value }));
	};

	const onSubmit = (_data: unknown) => setShowCongratulations(true);
	return (
		<div className="lg:px-12 md:px-6 px-1 mb-6">
			<main className="flex-1 max-w-screen-lg w-full mx-auto py-6">
				<header className="flex flex-row items-center justify-center md:justify-between px-12 lg:px-24 w-full">
					<Link
						to={state && state.from ? state.from : "/"}
						className="bg-gray-400 p-2 rounded-md hover:bg-gray-500 cursor-pointer hidden h-fit md:block">
						<ChevronLeft />
					</Link>
					<Logo />
					<div className="hidden md:block"></div>
				</header>
				<div className="mt-14 w-full">
					<h2 className="font-bold text-3xl w-full text-center">
						Sign up
					</h2>
					<p className="font-medium text-sm mt-2 w-full text-center">
						Please enter your details to create an account
					</p>
				</div>

				<form
					className="px-4 md:px-16 "
					onSubmit={handleSubmit(onSubmit)}>
					<section className="mt-10 w-full">
						<h3 className="font-medium text-2xl w-full text-center">
							Personal information
						</h3>

						<div className="flex flex-col gap-6 mt-6 mx-auto">
							{/* Name Section */}
							<section className="flex flex-col md:flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="first_name">
										First name
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-user text-accent"></i>
										<InputText
											{...register("firstName")}
											id="first_name"
											value={formData.firstName}
											onChange={(e) =>
												updateFormData(
													"firstName",
													e.target.value
												)
											}
											aria-describedby="first_name-help"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="Enter your first name"
										/>
									</div>
									{errors.firstName && (
										<span className="px-2 text-xs text-red-500">
											{errors.firstName.message}
										</span>
									)}
								</fieldset>
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="last_name">Last name</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-user text-accent"></i>
										<InputText
											{...register("lastName")}
											id="last_name"
											value={formData.lastName}
											onChange={(e) =>
												updateFormData(
													"lastName",
													e.target.value
												)
											}
											aria-describedby="last_name-help"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="Enter your last name"
										/>
									</div>
									{errors.lastName && (
										<span className="px-2 text-xs text-red-500">
											{errors.lastName.message}
										</span>
									)}
								</fieldset>
							</section>

							{/* Email and Phone Section */}
							<section className="flex flex-col md:flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="email">Email</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-envelope text-accent"></i>
										<InputText
											id="email"
											{...register("email")}
											onChange={(e) =>
												updateFormData(
													"email",
													e.target.value
												)
											}
											aria-describedby="email-help"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="Enter your email"
										/>
									</div>
									{errors.email && (
										<span className="px-2 text-xs text-red-500">
											{errors.email.message}
										</span>
									)}
								</fieldset>
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="phone_number">
										Phone number
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-phone text-accent"></i>
										<input
											// name="phone_number"
											id="phone_number"
											{...register("phoneNumber")}
											value={formData.phoneNumber}
											onChange={(e) =>
												updateFormData(
													"phoneNumber",
													e.currentTarget.value
												)
											}
											className="text-accent font-normal px-1 border-none outline-none py-2 w-full pl-4 pr-6 shadow-none"
											placeholder="Enter your phone number"
											// useGrouping={false}
										/>
									</div>
									{errors.phoneNumber && (
										<span className="px-2 text-xs text-red-500">
											{errors.phoneNumber.message}
										</span>
									)}
								</fieldset>
							</section>

							{/* Date of Birth and Gender Section */}
							<section className="flex flex-col md:flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="dob">Date of birth</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-calendar text-accent"></i>
										<Calendar
											value={formData.dob}
											{...register("dob")}
											onChange={(e) =>
												updateFormData("dob", e.value)
											}
											dateFormat="dd/mm/yy"
											className="text-accent font-normal px-1 border-none outline-none py-2 w-full shadow-none"
										/>
									</div>
									{errors.dob && (
										<span className="px-2 text-xs text-red-500">
											{errors.dob.message}
										</span>
									)}
								</fieldset>
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="gender">Gender</label>
									<div className="flex flex-row gap-2">
										<div
											onClick={() =>
												updateFormData("gender", "Male")
											}
											className={`flex flex-row gap-2 py-3 rounded-md border-2 pl-4 pr-6 items-center cursor-pointer ${
												formData.gender === "Male"
													? "border-primary"
													: "border-secondary"
											}`}>
											<RadioButton
												// name="gender"
												{...register("gender")}
												value="Male"
												checked={
													formData.gender === "Male"
												}
												onChange={(e) =>
													updateFormData(
														"gender",
														e.value
													)
												}
												className="outline rounded-full outline-accent"
												inputId="gender-male"
											/>
											<i className="pi pi-male text-accent"></i>
											<p className="font-light text-accent">
												Male
											</p>
										</div>
										<div
											onClick={() =>
												updateFormData(
													"gender",
													"Female"
												)
											}
											className={`flex flex-row gap-2 py-3 rounded-md border-2 pl-4 pr-6 items-center cursor-pointer ${
												formData.gender === "Female"
													? "border-primary"
													: "border-secondary"
											}`}>
											<RadioButton
												// name="gender"
												{...register("gender")}
												value="Female"
												checked={
													formData.gender === "Female"
												}
												onChange={(e) =>
													updateFormData(
														"gender",
														e.value
													)
												}
												className="outline rounded-full outline-accent"
												inputId="gender-female"
											/>
											<i className="pi pi-female text-accent"></i>
											<p className="font-light text-accent">
												Female
											</p>
										</div>
									</div>
								</fieldset>
							</section>

							{/* State of Origin and Address Section */}
							<section className="flex flex-col md:flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="state_of_origin">
										State of origin
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-map-marker text-accent"></i>
										<Dropdown
											value={formData.stateOfOrigin.name}
											{...register("stateOfOrigin")}
											onChange={(e) =>
												updateFormData(
													"stateOfOrigin",
													e.value
												)
											}
											options={states}
											optionLabel="name"
											editable
											placeholder="Select a State"
											className="w-full md:w-14rem py-2 shadow-none"
										/>
									</div>
									{errors.stateOfOrigin && (
										<span className="px-2 text-xs text-red-500">
											{errors.stateOfOrigin.message}
										</span>
									)}
								</fieldset>
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="address">Address</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-address-book text-accent"></i>
										<InputText
											id="address"
											{...register("address")}
											value={formData.address}
											onChange={(e) =>
												updateFormData(
													"address",
													e.currentTarget.value
												)
											}
											aria-describedby="address-help"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="Enter your address"
										/>
									</div>
									{errors.address && (
										<span className="px-2 text-xs text-red-500">
											{errors.address.message}
										</span>
									)}
								</fieldset>
							</section>

							{/* Emergency Contact and Phone Number Section */}
							<section className="flex flex-col md:flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="emergency_contact">
										Emergency contact
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-user text-accent"></i>
										<InputText
											id="emergency_contact"
											{...register("emergencyContact")}
											value={formData.emergencyContact}
											onChange={(e) =>
												updateFormData(
													"emergencyContact",
													e.currentTarget.value
												)
											}
											aria-describedby="emergency_contact-help"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="Enter your emergency contact"
										/>
									</div>
									{errors.emergencyContact && (
										<span className="px-2 text-xs text-red-500">
											{errors.emergencyContact.message}
										</span>
									)}
								</fieldset>
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="emergency_phone">
										Emergency phone number
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-phone text-accent"></i>
										<input
											{...register(
												"emergencyPhoneNumber"
											)}
											type="number"
											// name="emergencyPhoneNumber"
											id="emergency_phone"
											value={
												formData.emergencyPhoneNumber
											}
											onChange={(e) =>
												updateFormData(
													"emergencyPhoneNumber",
													e.currentTarget.value
												)
											}
											className="text-accent font-normal px-1 border-none outline-none py-2 w-full pl-4 pr-6 shadow-none"
											placeholder="Enter emergency phone number"
											// useGrouping={false}
										/>
									</div>
									{errors.emergencyPhoneNumber && (
										<span className="px-2 text-xs text-red-500">
											{
												errors.emergencyPhoneNumber
													.message
											}
										</span>
									)}
								</fieldset>
							</section>
						</div>
					</section>

					<section className="mt-16 w-full">
						<h3 className="font-medium text-2xl w-full text-center">
							Medical information
						</h3>
						<p className="w-full text-center text-accent">
							Fill each field with{" "}
							<span className="text-black">None</span> if it does
							not apply to you.
						</p>
						<div className="flex flex-col gap-6 mt-6">
							<section className="flex flex-col md:flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="medical_condition">
										Medical condition
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-heart text-accent"></i>{" "}
										{/* Icon for Medical Condition */}
										<InputText
											id="medical_condition"
											{...register("medicalCondition")}
											value={formData.medicalCondition}
											onChange={(e) =>
												updateFormData(
													"medicalCondition",
													e.currentTarget.value
												)
											}
											aria-describedby="medical-condition"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="Undergoing ...."
										/>
									</div>
									{errors.medicalCondition && (
										<span className="px-2 text-xs text-red-500">
											{errors.medicalCondition.message}
										</span>
									)}
								</fieldset>

								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="current_medication">
										Current medications
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-medkit text-accent"></i>{" "}
										<Syringe className="text-accent" />
										{/* Icon for Current Medications */}
										<InputText
											id="current_medications"
											{...register("currentMedications")}
											value={formData.currentMedications}
											onChange={(e) =>
												updateFormData(
													"currentMedications",
													e.currentTarget.value
												)
											}
											aria-describedby="current_medications"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="eg: Panadol..."
										/>
									</div>
									{errors.currentMedications && (
										<span className="px-2 text-xs text-red-500">
											{errors.currentMedications.message}
										</span>
									)}
								</fieldset>
							</section>

							<section className="flex flex-col md:flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="vaccination_history">
										Vaccination history
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-shield text-accent"></i>{" "}
										{/* Icon for Vaccination History */}
										<InputText
											id="vaccination_history"
											value={formData.vaccinationHistory}
											{...register("vaccinationHistory")}
											onChange={(e) =>
												updateFormData(
													"vaccinationHistory",
													e.currentTarget.value
												)
											}
											aria-describedby="vaccination_history"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="Select vaccines received"
										/>
									</div>
									{errors.vaccinationHistory && (
										<span className="px-2 text-xs text-red-500">
											{errors.vaccinationHistory.message}
										</span>
									)}
								</fieldset>

								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="past_procedures">
										Past procedures or Surgeries
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-calendar text-accent"></i>{" "}
										{/* Icon for Past Procedures */}
										<InputText
											id="past_procedures"
											value={formData.pastProcedures}
											{...register("pastProcedures")}
											onChange={(e) =>
												updateFormData(
													"pastProcedures",
													e.currentTarget.value
												)
											}
											aria-describedby="past_procedures"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="e.g: Appendectomy"
										/>
									</div>
									{errors.pastProcedures && (
										<span className="px-2 text-xs text-red-500">
											{errors.pastProcedures.message}
										</span>
									)}
								</fieldset>
							</section>

							<section className="flex flex-col md:flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="allergies">Allergies</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-exclamation-triangle text-accent"></i>{" "}
										{/* Icon for Allergies */}
										<InputText
											id="allergies"
											{...register("allergies")}
											value={formData.allergies}
											onChange={(e) =>
												updateFormData(
													"allergies",
													e.currentTarget.value
												)
											}
											aria-describedby="allergies"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="e.g: Peanuts, Penicillin, Pollen..."
										/>
									</div>
									{errors.allergies && (
										<span className="px-2 text-xs text-red-500">
											{errors.allergies.message}
										</span>
									)}
								</fieldset>

								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="blood_type">
										Blood type
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<HeartPulse className="text-accent" />
										{/* Icon for Blood Type */}
										<InputText
											id="blood_type"
											value={formData.bloodType}
											{...register("bloodType")}
											onChange={(e) =>
												updateFormData(
													"bloodType",
													e.currentTarget.value
												)
											}
											aria-describedby="blood_type"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="e.g: A positive (A+), AB negative (AB-)"
										/>
									</div>
									{errors.bloodType && (
										<span className="px-2 text-xs text-red-500">
											{errors.bloodType.message}
										</span>
									)}
								</fieldset>
							</section>

							<section className="flex flex-col md:flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="family_history">
										Family medical history
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-users text-accent"></i>{" "}
										{/* Icon for Family History */}
										<InputTextarea
											id="family_history"
											value={formData.familyHistory}
											{...register("familyHistory")}
											onChange={(e) =>
												updateFormData(
													"familyHistory",
													e.currentTarget.value
												)
											}
											aria-describedby="family_history"
											rows={1}
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="e.g: Father had heart disease."
										/>
									</div>
									{errors.familyHistory && (
										<span className="px-2 text-xs text-red-500">
											{errors.familyHistory.message}
										</span>
									)}
								</fieldset>

								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="past_medical-history">
										Past medical history
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-history text-accent"></i>{" "}
										{/* Icon for Past Medical History */}
										<InputTextarea
											id="past_medical-history"
											{...register("pastMedicalHistory")}
											value={formData.pastMedicalHistory}
											onChange={(e) =>
												updateFormData(
													"pastMedicalHistory",
													e.currentTarget.value
												)
											}
											aria-describedby="past_medical-history"
											rows={1}
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="e.g: Father had heart disease."
										/>
									</div>
									{errors.pastMedicalHistory && (
										<span className="px-2 text-xs text-red-500">
											{errors.pastMedicalHistory.message}
										</span>
									)}
								</fieldset>
							</section>
						</div>
					</section>

					<section className="mt-16 w-full">
						<h3 className="font-medium text-2xl w-full text-center">
							Identification and Verification
						</h3>

						<div className="flex flex-col gap-6 mt-6">
							<section className="flex flex-col md:flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="identification_type">
										Identification type
									</label>

									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<IdCard className="text-accent" />
										<InputText
											id="identification_type"
											value={formData.identificationType}
											{...register("identificationType")}
											onChange={(e) =>
												updateFormData(
													"identificationType",
													e.currentTarget.value
												)
											}
											aria-describedby="identification_type"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="e.g: Birth certificate..."
										/>
									</div>
									{errors.identificationType && (
										<span className="px-2 text-xs text-red-500">
											{errors.identificationType.message}
										</span>
									)}
								</fieldset>

								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="identification_number">
										Identification number
									</label>

									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<FaIdBadge className="text-accent" />
										<InputText
											id="identification_number"
											{...register(
												"identificationNumber"
											)}
											value={
												formData.identificationNumber
											}
											onChange={(e) =>
												updateFormData(
													"identificationNumber",
													e.currentTarget.value
												)
											}
											aria-describedby="identification_number"
											className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
											placeholder="Enter ID number"
										/>
									</div>
									{errors.identificationNumber && (
										<span className="px-2 text-xs text-red-500">
											{
												errors.identificationNumber
													.message
											}
										</span>
									)}
								</fieldset>
							</section>

							<UploadFile />
						</div>
					</section>

					<section className="mt-16 w-full flex flex-col gap-1 ">
						<div className="flex flex-row items-center gap-4">
							<TriStateCheckbox value={true} />
							<p className="text-accent">
								I acknowledge that I have reviewed and agreed to
								the{" "}
								<Link
									to="./"
									className="text-primary underline">
									privacy policy
								</Link>
							</p>
						</div>
						<div className="flex flex-row items-center gap-4">
							<TriStateCheckbox value={true} />
							<p className="text-accent">
								I consent to sharing my health information with
								my healthcare providers within the HealthSync
								network
							</p>
						</div>
						<div className="flex flex-row items-center gap-4">
							<TriStateCheckbox value={true} />
							<p className="text-accent">
								I consent to the use and disclosure of my health
								information for treatment purposes
							</p>
						</div>
					</section>
					<button
						type="submit"
						className="bg-primary hover:bg-blue-900 duration-300 transition-all active:bg-blue-950 py-2 rounded-md text-white w-full mt-8 mb-2 font-medium">
						Submit and Create account
					</button>
				</form>
			</main>

			<Dialog
				visible={showCongratulations}
				dismissableMask={true}
				showHeader={false}
				content={() => (
					<div
						className="flex bg-transparent flex-column px-8 py-5 gap-4"
						style={{
							borderRadius: "12px",
							backgroundImage:
								"radial-gradient(circle at left top, var(--primary-400), var(--primary-700))",
						}}>
						<Congratulations />
					</div>
				)}
				blockScroll={true}
				onHide={() => {
					if (showCongratulations) return;
					setShowCongratulations(false);
				}}></Dialog>
		</div>
	);
};

export default RegisterUser;

interface StateOfOrigin {
	code: string;
	name: string;
}

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber?: number;
	dob: Date;
	gender: "Male" | "Female";
	stateOfOrigin: StateOfOrigin;
	address: string;
	emergencyContact: string;
	emergencyPhoneNumber?: number;
	medicalCondition: string;
	currentMedications: string;
	vaccinationHistory: string;
	pastProcedures: string;
	allergies: string;
	bloodType: string;
	familyHistory: string;
	pastMedicalHistory: string;
	identificationType: string;
	identificationNumber: string;
}
