import { useRouter } from "next/router";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import Input from "../components/Input";


const Home = () => {
  
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();
    
    router.push(
      { pathname: '/map',
       query: { address: event.target.address.value } },
      'map'
    );
    
  };

  return (
    <>
      <Head>
        <title>Brîckbro FrontEnd Test</title>
      </Head>

      <AppLayout>
        <div className="home-wrapper">
          <img src="/brickbro-logo.png" alt="Logo" />
          <form className='form-wrapper' onSubmit={handleClick}>
            <Input />
            <Button>Search</Button>
          </form>
          <h1>Home</h1>
        </div>
      </AppLayout>

      <style jsx>{`
        body,
        h1 {
          text-align: center;
        }

        .home-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          
        }

        .form-wrapper {
          width: 90%;
          max-width: 1200px;
          display: flex;
          justify-content: center;
        }

        img {
          width: 240px;
        }

        @media (max-width: 500px) {
          .form-wrapper {
            flex-direction: column;
            align-items: center;
          }
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
