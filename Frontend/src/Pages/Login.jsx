import Form from "../components/Form";
import { useState } from "react";
import PageDisabledModal from "../components/PageDisabledModal";
import { login } from "../../api/auth";
const fields = [
  {
    name: "username",
    placeholder: "insert a username",
    requireMsg: "Please insert a username",
  },
  {
    name: "password",
    placeholder: "insert a password",
    requireMsg: "Please insert a password",
    isPassword: true,
  },
];

export default function Login() {
  const [triggered, setTriggered] = useState(false);
  const disable = () => setTriggered(false);

  return (
    <>
      <Form
      onSubmit={login}
        setTriggered={setTriggered}
        triggered={triggered}
        openModal={true}
        fields={fields}
      />

      <PageDisabledModal
        triggered={triggered}
        disable={disable}
        innerText="Form submitted succesfully"
      />
    </>
  );
}
