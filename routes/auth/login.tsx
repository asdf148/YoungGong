import Login from "@/islands/Login.tsx";

export default function LoginPage() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <br />
      <h2>Sign In</h2>
      <br />
      <Login />
    </div>
  );
}
