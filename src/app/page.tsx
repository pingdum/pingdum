export default function HomePage() {
  console.log("ENV:", process.env.NEXT_PUBLIC_CLIENT_API_KEY);
  return (
    <div>
      <h1>Home: {process.env.NEXT_PUBLIC_CLIENT_API_KEY}</h1>

      <p>Please enter your credentials to log in.</p>
      <button>Login</button>
    </div>
  );
}
