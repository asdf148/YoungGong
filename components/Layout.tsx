export default function Layout({ children }: any) {
  return (
    <>
      <div>
        <nav class="flex w-full px-3 py-2 bg-yellow-800 text-white mb-10 justify-between">
          <a class="mx-4" href="/">
            <img
              src="/logo.svg"
              class="w-12 h-12"
              alt="the fresh logo: a sliced lemon dripping with juice"
            />
          </a>
          <a class="place-content-center" href="/auth/user">User</a>
        </nav>
        {children}
      </div>
    </>
  );
}
