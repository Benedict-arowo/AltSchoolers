import * as Yup from "yup";

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required("First name is required"),
	lastName: Yup.string().required("Last name is required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	phoneNumber: Yup.number()
		.typeError("Phone number must be a number")
		.required("Phone number is required"),
	dob: Yup.date().required("Date of birth is required"),
	gender: Yup.string()
		.oneOf(["Male", "Female"], "Gender is required")
		.required("Gender is required"),
	stateOfOrigin: Yup.object().shape({
		code: Yup.string().required("State code is required"),
		name: Yup.string().required("State name is required"),
	}),
	address: Yup.string().required("Address is required"),
	emergencyContact: Yup.string().required("Emergency contact is required"),
	emergencyPhoneNumber: Yup.number()
		.typeError("Emergency phone number must be a number")
		.required("Emergency phone number is required"),
	medicalCondition: Yup.string(),
	currentMedications: Yup.string(),
	vaccinationHistory: Yup.string(),
	pastProcedures: Yup.string(),
	allergies: Yup.string(),
	bloodType: Yup.string(),
	familyHistory: Yup.string(),
	pastMedicalHistory: Yup.string(),
	identificationType: Yup.string().required(
		"Identification type is required"
	),
	identificationNumber: Yup.string()
		.matches(
			/^[0-9a-zA-Z]+$/,
			"Identification number should be alphanumeric"
		)
		.required("Identification number is required"),
});

export default validationSchema;
