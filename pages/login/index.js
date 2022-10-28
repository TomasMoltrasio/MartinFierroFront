import Head from "next/head";
import LoginContainer from "containers/LoginContainer";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer />
    </>
  );
}
