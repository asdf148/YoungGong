import { useState } from "preact/hooks";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const send = () => {
    console.log(form);
    fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    }).then((response: Response) => {
      response.json().then((result) => {
        console.log(result);
      });
    });
    setForm({ email: "", password: "" });
  };

  const onInput = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <input
        type="email"
        class="border rounded shadow-md px-4 py-2 w-72"
        placeholder="Email"
        name="email"
        value={form.email}
        onInput={onInput}
        onKeyDown={(e) => e.key === "Enter" && send()}
      />
      <br />
      <br />
      <input
        type="password"
        class="border rounded shadow-md px-4 py-2 w-72"
        placeholder="Password"
        name="password"
        value={form.password}
        onInput={onInput}
        onKeyDown={(e) => e.key === "Enter" && send()}
      />
      <br />
      <br />
      <button
        class="border rounded shadow-md px-4 py-2 bg-blue-800 text-white"
        type="submit"
        onClick={send}
      >
        Sign In
      </button>
    </>
  );
}
