import Join from "@/islands/Join.tsx";

export default function JoinPage() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <br />
      <h2>Sign Up</h2>
      <br />
      <Join />
    </div>
  );
}
