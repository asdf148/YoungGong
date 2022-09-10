export default function Home() {
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
      <form>
        <input
          type="text"
          class="border rounded shadow-md px-4 py-2 w-72"
          name="name"
          placeholder="Name"
        />
        <br />
        <br />
        <input
          type="email"
          class="border rounded shadow-md px-4 py-2 w-72"
          name="email"
          placeholder="Email"
        />
        <br />
        <br />
        <input
          type="password"
          class="border rounded shadow-md px-4 py-2 w-72"
          name="password"
          placeholder="Password"
        />
        <br />
        <br />
        <button
          class="border rounded shadow-md px-4 py-2 bg-blue-800 text-white"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
