import { InputText } from "primereact/inputtext";
import Logo from "../../Components/Main/Logo";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

const Registration = () => {
	const [selectedCountry, setSelectedCountry] = useState(null);
	const countries = [
		{ name: "Nigeria", code: "NG" },
		{ name: "United States", code: "US" },
		
	];

    const currentYear = new Date().getFullYear();
}

	return (
		<div className="lg:px-12 md:px-6 px-1 mb-6">
			<main className="flex-1 py-6 lg:mx-16 md:mx-8 mx-4">
				<header>
					<div></div>
					<Logo />
				</header>

				<div className="mt-12">
					<h2 className="font-bold text-3xl">Register</h2>
					<p className="font-medium text-sm mt-2">
						Please upload and register correct details to register your hospital
					</p>
				</div>

				<section className="mt-10">
					<h3 className="font-medium text-2xl">
						Hospital information
					</h3>

					<div className="px-16 flex flex-col gap-6 mt-6">
						<section className="flex flex-row flex-wrap gap-6 justify-between">
							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="hospital_name">Hospital name</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									
									<InputText
										id="hospital_name"
										aria-describedby="hospital_name-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Enter the full official name of the hospital"
									/>
								</div>
							</fieldset>

							<fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="hospital_type">Hospital type</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									
									<InputText
										id="hospital_type"
										aria-describedby="hospital_type-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Select hospital type"

                                        
									/>
                                    <Dropdown
										value={selectedCountry}
										options={countries}
										optionLabel="name"
										editable
										placeholder="Select a State"
										className="w-full md:w-14rem py-2 shadow-none"
									/>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
                        <fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="year_established">Year Established</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									
									<InputText
										id="year_established"
										aria-describedby="year_established-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="YYYY"

                                        
									/>
                                    <Dropdown
										value= {new Date().getFullYear()}
										options={}
										optionLabel="Year"
										editable
										placeholder="Select year"
										className="w-full md:w-14rem py-2 shadow-none"
									/>
								</div>
							</fieldset>

                            <fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="registration_number">Hospital Registration Number</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									
									<InputText
										id="registration_number"
										aria-describedby="registration_number-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Enter official registration number"

                                        
									/>
                                    <Dropdown
										value={}
										options={}
										optionLabel=""
										editable
										placeholder=" "
										className="w-full md:w-14rem py-2 shadow-none"
									/>
								</div>
							</fieldset>
                            <fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="country">Country</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									
									<InputText
										id="country"
										aria-describedby="country-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Select country"

                                        
									/>
                                    <Dropdown
										value={}
										options={}
										optionLabel="nme"
										editable
										placeholder=""
										className="w-full md:w-14rem py-2 shadow-none"
									/>
								</div>
							</fieldset>
						</section>

						<section className="flex flex-row gap-6 justify-between">
                        <fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="province">State/Province</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									
									<InputText
										id="province"
										aria-describedby="state-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Select state/province"

                                        
									/>
                                    <Dropdown
										value={}
										options={}
										optionLabel=""
										editable
										placeholder=""
										className="w-full md:w-14rem py-2 shadow-none"
									/>
								</div>
							</fieldset>

                            <fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="city">City</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									
									<InputText
										id="city"
										aria-describedby="city-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Enter city"

                                        
									/>
                                    <Dropdown
										value={selectedState}
										options={}
										optionLabel="name"
										editable
										placeholder="Enter city"
										className="w-full md:w-14rem py-2 shadow-none"
									/>
								</div>
							</fieldset>
                            <fieldset className="grid w-full items-center gap-1.5">
								<label htmlFor="hospital_address">Hospital address</label>

								<div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
									
									<InputText
										id="hospital_address"
										aria-describedby="hospital_address-help"
										className="text-accent font-normal px-1 border-none w-full py-2 outline-none shadow-none"
										placeholder="Enter hospital address"
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

export default Registration;