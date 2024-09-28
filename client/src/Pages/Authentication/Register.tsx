import NaijaStates from 'naija-state-local-government';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { useState } from 'react';
import Logo from '../../Components/Main/Logo';
import email_icon from '../../assets/icons/email.svg';
import password_icon from '../../assets/icons/password.svg';

const Register = () => {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <div className="lg:px-12 md:px-6 px-1 mb-6">
      <main className="flex-1 py-6 lg:mx-16 md:mx-8 mx-4">
        <header>
          <div></div>
          <Logo />
        </header>

        <div className="mt-12">
          <h2 className="font-bold text-3xl">Sign up</h2>
          <p className="font-medium text-sm mt-2">
            Please enter your details to create an account
          </p>
        </div>

        <section className="mt-10">
          <h3 className="font-medium text-2xl">Personal information</h3>

          <div className="px-16 flex flex-col gap-6 mt-6">
            <section className="flex flex-row flex-wrap gap-6 justify-between">
              <fieldset className="grid w-full items-center gap-1.5">
                <label htmlFor="first_name">First name</label>

                <div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
                  <img src={password_icon} className="" alt="" />
                  <InputText
                    id="first_name"
                    type="text"
                    aria-describedby="first_name-help"
                    className="font-normal px-1 border-none w-full py-2 outline-none shadow-none"
                    placeholder="Enter your first name"
                  />
                </div>
              </fieldset>

              <fieldset className="grid w-full items-center gap-1.5">
                <label htmlFor="last_name">Last name</label>

                <div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
                  <img src={password_icon} className="" alt="" />
                  <InputText
                    id="last_name"
                    type="text"
                    aria-describedby="last_name-help"
                    className="font-normal px-1 border-none w-full py-2 outline-none shadow-none"
                    placeholder="Enter your last name"
                  />
                </div>
              </fieldset>
            </section>

            <section className="flex flex-row gap-6 justify-between">
              <fieldset className="grid w-full items-center gap-1.5">
                <label htmlFor="first_name">Email</label>

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
                <label htmlFor="last_name">Phone number</label>

                <div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
                  <img src={password_icon} className="" alt="" />
                  <InputNumber
                    name="emergency_phone_number"
                    id="emergency_phone_number"
                    className="font-normal px-1 border-none outline-none py-2 w-full shadow-none"
                    placeholder="08031234567"
                    useGrouping={false}
                  />
                </div>
              </fieldset>
            </section>

            <section className="flex flex-row gap-6 justify-between">
              <fieldset className="grid w-full items-center gap-1.5">
                <label htmlFor="first_name">Date of birth</label>

                <div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
                  <Calendar
                    value={new Date()}
                    dateFormat="dd/mm/yy"
                    className="font-normal px-1 border-none outline-none py-2 w-full shadow-none"
                  />
                </div>
              </fieldset>

              <fieldset className="grid w-full items-center gap-1.5">
                <label htmlFor="last_name">Gender</label>

                <div className="flex flex-row gap-2">
                  <div className="flex flex-row gap-2 py-2 rounded-md border-2 px-4 border-primary items-center">
                    <RadioButton
                      name="gender"
                      value={'Male'}
                      checked
                      className="outline rounded-full outline-accent"
                    />
                    <p className="font-light ">Male</p>
                  </div>
                  <div className="flex flex-row gap-2 py-2 rounded-md border-2 px-4 border-secondary items-center">
                    <RadioButton
                      name="gender"
                      value={'Female'}
                      checked={false}
                      className="outline rounded-full outline-accent"
                    />
                    <p className="font-light ">Female</p>
                  </div>
                </div>
              </fieldset>
            </section>

            <section className="flex flex-row gap-6 justify-between">
              <fieldset className="grid w-full items-center gap-1.5">
                <label htmlFor="state_of_origin">State of origin</label>

                <div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
                  <img src={password_icon} className="" alt="" />
                  <Dropdown
                    value={selectedState}
                    options={NaijaStates.states()}
                    onChange={(e) => setSelectedState(e.value)}
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
                  <img src={password_icon} className="" alt="" />
                  <InputText
                    id="address"
                    aria-describedby="address-help"
                    className="font-normal px-1 border-none w-full py-2 outline-none shadow-none"
                    placeholder="Enter your address"
                  />
                </div>
              </fieldset>
            </section>

            <section className="flex flex-row gap-6 justify-between">
              <fieldset className="grid w-full items-center gap-1.5">
                <label htmlFor="nationality">Emergency contact</label>

                <div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
                  <img src={password_icon} className="" alt="" />
                  <InputText
                    id="emergency_contact"
                    aria-describedby="emergency_contact-help"
                    className="font-normal px-1 border-none w-full py-2 outline-none shadow-none"
                    placeholder="Enter your emergency contact"
                  />
                </div>
              </fieldset>

              <fieldset className="grid w-full items-center gap-1.5">
                <label htmlFor="last_name">Emergency Phone number</label>

                <div className="flex flex-row items-center gap-2 border-2 border-secondary px-2 rounded-md py-0.5 focus-within:border-primary">
                  <img src={password_icon} className="" alt="" />
                  <InputNumber
                    name="emergency_phone_number"
                    id="emergency_phone_number"
                    className="font-normal px-1 border-none outline-none py-2 w-full shadow-none"
                    placeholder="Enter emergency contact phone number"
                    useGrouping={false}
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
