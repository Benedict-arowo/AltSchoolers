import { InputText } from "primereact/inputtext";
import Logo from "../../Components/Main/Logo";
import { InputNumber } from "primereact/inputnumber";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import { Button } from "primereact/button";
import UploadFile from "../../Components/Authentication/UploadFile";
import { FaIdCard, FaIdBadge } from "react-icons/fa";
import validationSchema from "../../Components/Authentication/ValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const defaultValues: FormData = {
	firstName: "",
	lastName: "",
	email: "",
	phoneNumber: 123456789,
	dob: new Date(),
	gender: "Male",
	stateOfOrigin: {
		code: "",
		name: "",
	},
	address: "",
	emergencyContact: "",
	emergencyPhoneNumber: 123456789,
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

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues,
		resolver: yupResolver(validationSchema),
	});

	const onSubmit = (data) => {
		// Handle form submission
		console.log(data);
		// Call backend API here
	};

	const states = [
		{ name: "Osun", code: "OS" },
		{ name: "Ondo", code: "ON" },
		{ name: "Abia", code: "Ab" },
		{ name: "Kaduna", code: "KA" },
		{ name: "Bauchi", code: "BA" },
	];

	const updateFormData = (key: string, value: string) => {
		setFormData((prev) => ({ ...prev, [key]: value }));
	};

	useEffect(() => {
		console.log(errors);
	}, [formData]);

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

				<form
					onSubmit={(e) => {
						e.preventDefault();
						console.log("Submitting");
						handleSubmit(onSubmit);
					}}>
					<section className="mt-10 w-full">
						<h3 className="font-medium text-2xl w-full text-center">
							Personal information
						</h3>

						<div className="px-16 flex flex-col gap-6 mt-6 mx-auto">
							{/* Name Section */}
							<section className="flex flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="first_name">
										First name
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-user text-accent"></i>
										<InputText
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
								</fieldset>
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="last_name">Last name</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-user text-accent"></i>
										<InputText
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
								</fieldset>
							</section>

							{/* Email and Phone Section */}
							<section className="flex flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="email">Email</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-envelope text-accent"></i>
										<InputText
											id="email"
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
								</fieldset>
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="phone_number">
										Phone number
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-phone text-accent"></i>
										<InputNumber
											name="phone_number"
											id="phone_number"
											value={formData.phoneNumber}
											onChange={(e) =>
												updateFormData(
													"phoneNumber",
													e.value?.toString() || ""
												)
											}
											className="text-accent font-normal px-1 border-none outline-none py-2 w-full pl-4 pr-6 shadow-none"
											placeholder="Enter your phone number"
											useGrouping={false}
										/>
									</div>
								</fieldset>
							</section>

							{/* Date of Birth and Gender Section */}
							<section className="flex flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="dob">Date of birth</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-calendar text-accent"></i>
										<Calendar
											value={formData.dob}
											onChange={(e) =>
												updateFormData(
													"dob",
													e.value?.toString() || ""
												)
											}
											dateFormat="dd/mm/yy"
											className="text-accent font-normal px-1 border-none outline-none py-2 w-full shadow-none"
										/>
									</div>
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
												name="gender"
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
												name="gender"
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
							<section className="flex flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="state_of_origin">
										State of origin
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-map-marker text-accent"></i>
										<Dropdown
											value={formData.stateOfOrigin.name}
											onChange={(e) =>
												updateFormData(
													"stateOfOrigin",
													e.value
												)
											}
											options={states}
											optionLabel="state_of_origin"
											editable
											placeholder="Select a State"
											className="w-full md:w-14rem py-2 shadow-none"
										/>
									</div>
								</fieldset>
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="address">Address</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-address-book text-accent"></i>
										<InputText
											id="address"
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
								</fieldset>
							</section>

							{/* Emergency Contact and Phone Number Section */}
							<section className="flex flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="emergency_contact">
										Emergency contact
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-user text-accent"></i>
										<InputText
											id="emergency_contact"
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
								</fieldset>
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="emergency_phone">
										Emergency phone number
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-phone text-accent"></i>
										<InputNumber
											name="emergency_phone"
											id="emergency_phone"
											value={formData.emergencyPhone}
											onChange={(e) =>
												updateFormData(
													"emergencyPhone",
													e.value?.toString() || ""
												)
											}
											className="text-accent font-normal px-1 border-none outline-none py-2 w-full pl-4 pr-6 shadow-none"
											placeholder="Enter emergency phone number"
											useGrouping={false}
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
										<i className="pi pi-heart text-accent"></i>{" "}
										{/* Icon for Medical Condition */}
										<InputText
											id="medical_condition"
											value={formData.medicalCondition}
											onChange={(e) =>
												updateFormData(
													"medicalCondition",
													e.currentTarget.value
												)
											}
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
										<i className="pi pi-medkit text-accent"></i>{" "}
										{/* Icon for Current Medications */}
										<InputText
											id="current_medications"
											value={formData.currentMedications}
											onChange={(e) =>
												updateFormData(
													"currentMedications",
													e.currentTarget.value
												)
											}
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
										<i className="pi pi-shield text-accent"></i>{" "}
										{/* Icon for Vaccination History */}
										<InputText
											id="vaccination_history"
											value={formData.vaccinationHistory}
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
								</fieldset>
							</section>

							<section className="flex flex-row gap-6 justify-between">
								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="allergies">Allergies</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-exclamation-triangle text-accent"></i>{" "}
										{/* Icon for Allergies */}
										<InputText
											id="allergies"
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
								</fieldset>

								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="blood_type">
										Blood type
									</label>
									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<i className="pi pi-tint text-accent"></i>{" "}
										{/* Icon for Blood Type */}
										<InputText
											id="blood_type"
											value={formData.bloodType}
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
								</fieldset>
							</section>

							<section className="flex flex-row gap-6 justify-between">
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
											onChange={(e) =>
												updateFormData(
													"familyHistory",
													e.currentTarget.value
												)
											}
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
										<i className="pi pi-history text-accent"></i>{" "}
										{/* Icon for Past Medical History */}
										<InputTextarea
											id="past_medical-history"
											value={formData.pastMedicalHistory}
											onChange={(e) =>
												updateFormData(
													"pastMedicalHistory",
													e.currentTarget.value
												)
											}
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
										<FaIdCard className="text-xl" />
										<InputText
											id="identification_type"
											value={formData.identificationType}
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
								</fieldset>

								<fieldset className="grid w-full items-center gap-1.5">
									<label htmlFor="identification_number">
										Identification number
									</label>

									<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
										<FaIdBadge className="text-xl" />
										<InputText
											id="identification_number"
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
								</fieldset>
							</section>

							<UploadFile />
						</div>
					</section>

					<section className="mt-16 w-full px-16 flex flex-col gap-1 ">
						<div className="flex flex-row items-center gap-4">
							<TriStateCheckbox value={true} />
							<p className="text-accent">
								I acknowledge that I have reviewed and agreed to
								the{" "}
								<span className="text-primary">
									privacy policy
								</span>
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
					<Button
						type="submit"
						label="Submit and Create account"
						className="bg-primary py-2 rounded-md text-white w-full mt-8 mb-2 font-medium"
					/>
				</form>
			</main>
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
	phoneNumber: number;
	dob: Date;
	gender: "Male" | "Female";
	stateOfOrigin: StateOfOrigin;
	address: string;
	emergencyContact: string;
	emergencyPhoneNumber: number;
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
