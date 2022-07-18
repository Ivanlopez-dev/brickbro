import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import Input from "../components/Input";

const Map = () => {
  const [address, setAddress] = useState("");
  const [addresses, setAddresses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!router.query.address) {
      router.push("/");
    } else {
      setAddresses([router.query.address, ...addresses]);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (address != "" && address) {
      setAddresses([address, ...addresses]);
    }

    console.log(addresses);
  };

  return (
    <>
      <Head>
        <title>Map</title>
      </Head>

      <AppLayout>
        <div className="map-wrapper">
          <img src="/brickbro-logo.png" alt="Logo" />
          <form className="form-wrapper" onSubmit={handleClick}>
            <Input setAddress={setAddress} />
            <Button>Search</Button>
          </form>

          <div className="addresses-wrapper">
            <h4>Búsquedas</h4>
            {addresses.length >= 1
              ? addresses.map((address, idx) => {
                  return <p key={idx}>{address}</p>;
                })
              : "Test"}
          </div>
          <h1>Map</h1>
        </div>
      </AppLayout>

      <style jsx>{`
        body,
        h1 {
          text-align: center;
        }

        .map-wrapper {
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

        .addresses-wrapper {
          width: 86%;
          max-width: 1200px;
          border: 2px solid darkgray;
          border-radius: 9px;
        }

        h4 {
          padding-left: 20px;
          font-size: 12;
          color: gray;
        }

        p {
          padding-left: 20px;
          color: black;
          font-weight: bold;
        }

        @media (max-width: 500px) {
          .form-wrapper {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
};

export default Map;
