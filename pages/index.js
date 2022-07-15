import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import Input from "../components/Input"

const Home = () => {

  // const handleClick = () => {}

  return (
    <>
      <Head>
        <title>Brîckbro FrontEnd Test</title>
      </Head>

      <AppLayout>
        <img src="/brickbro-logo.png" alt="Logo" />
        <form>
          <Input/>
          <Button>Search</Button>
        </form>
        <h1>Home</h1>
      </AppLayout>

      <style jsx>{`
        body,
        h1 {
          text-align: center;
        }

        img {
          width: 240px;
          margin: 24px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body,
        h1 {
          font-family: "Space Grotesk", sans-serif;
        }
      `}</style>
    </>
  );
};

export default Home;
