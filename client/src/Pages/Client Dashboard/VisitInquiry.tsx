import { InputText } from "primereact/inputtext";
import Logo from "../../Components/Main/Logo";

const VisitInquiry = () => {
	return (
		<div>
			<header className="py-6">
				<div className="flex flex-row items-center justify-center px-12">
					<Logo />
				</div>
				<h2 className="text-2xl font-semibold w-full text-center mt-24">
					Please tell us about your visit today
				</h2>
			</header>

			<form className="w-full max-w-screen-lg mx-auto mt-4 grid place-items-center">
				<section className="flex flex-row justify-center items-center flex-wrap gap-x-4 gap-y-6">
					<fieldset className="grid max-w-[500px] w-full items-center gap-1.5">
						<label
							className="font-semibold text-sm"
							htmlFor="reason">
							Reason for visit
						</label>
						<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
							<InputText
								id="reason"
								aria-describedby="visit-reason"
								className="text-accent font-normal px-1 border-none w-full  py-2 outline-none shadow-none"
								placeholder="e.g: Emergency, lab test, follow up visit..."
							/>
						</div>
					</fieldset>

					<fieldset className="grid max-w-[500px] w-full items-center gap-1.5">
						<label
							className="font-semibold text-sm"
							htmlFor="symptoms">
							Symptoms
						</label>
						<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
							<InputText
								id="symptoms"
								aria-describedby="Symptoms"
								className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
								placeholder="e.g: Cough, Runny nose..."
							/>
						</div>
					</fieldset>
					<div className="flex flex-row gap-x-4 justify-start max-w-[500px] w-full">
						<fieldset className="grid max-w-[220px] w-full items-center gap-1.5">
							<label
								className="font-semibold text-sm"
								htmlFor="symptoms-duration">
								Symptoms duration
							</label>
							<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
								<InputText
									id="symptoms-duration"
									aria-describedby="Symptoms-duration"
									className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
									placeholder="e.g: Select an option..."
								/>
							</div>
						</fieldset>

						<fieldset className="grid max-w-[250px] w-full items-center gap-1.5">
							<label
								className="font-semibold text-sm"
								htmlFor="preferred-language">
								Preferred language for consultation
							</label>
							<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
								<InputText
									id="preferred-language"
									aria-describedby="preferred-language"
									className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
									placeholder="Select your perferred language"
								/>
							</div>
						</fieldset>
					</div>

					<fieldset className="grid max-w-[500px] w-full items-center gap-1.5">
						<label
							className="font-semibold text-sm"
							htmlFor="pain-level">
							Pain level
						</label>
						<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
							<InputText
								id="pain-level"
								aria-describedby="pain-level"
								className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
								placeholder="Choose a number on a scale of 1-10"
							/>
						</div>
					</fieldset>

					<fieldset className="grid max-w-[500px] w-full items-center gap-1.5">
						<label
							className="font-semibold text-sm"
							htmlFor="special-assistance">
							Special assistance
						</label>
						<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
							<InputText
								id="special-assistance"
								aria-describedby="special-assistance"
								className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
								placeholder="Select an option for a type of special assistance"
							/>
						</div>
					</fieldset>

					<fieldset className="grid max-w-[500px] w-full items-center gap-1.5">
						<label
							className="font-semibold text-sm"
							htmlFor="urgency-level">
							Urgency level
						</label>
						<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
							<InputText
								id="urgency-level"
								aria-describedby="urgency-level"
								className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
								placeholder="Select an urgency level"
							/>
						</div>
					</fieldset>
				</section>
				<section>
					<button className="bg-primary py-2 rounded-md text-white w-full mt-4 mb-2">
						Submit
					</button>
					<p className="text-sm">
						If this is an emergency, please proceed directly to the
						Emergency Department or call{" "}
						<span className="text-red-500">
							{"{EMERGENCY NUMBER}"}
						</span>
					</p>
				</section>
			</form>
		</div>
	);
};

export default VisitInquiry;
