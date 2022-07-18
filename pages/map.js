import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import Input from "../components/Input";
import { codeAddress } from "./utils/utils.js";


const Map = () => {
  const [address, setAddress] = useState("");
  const [addresses, setAddresses] = useState([]);

  const router = useRouter();

  useEffect(() => {
      setAddresses([router?.query?.address, ...addresses]);
    
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (address != "" && address) {
      setAddresses([address, ...addresses]);
      codeAddress(address);
    }
  };

  return (
    <>
      <Head>
        <title>Map</title>
      </Head>
      <Script src="sc.js" strategy="beforeInteractive"></Script>

      <Script
        strategy="lazyOnload"
        async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjEDH52-2gtlTrvn4645m1VopwsiU8OrA&callback=initMap"
      ></Script>

      <AppLayout>
        <div className="map-wrapper">
          <img src="/brickbro-logo.png" alt="Logo" />
          <form className="form-wrapper" onSubmit={handleClick}>
            <Input setAddress={setAddress} />
            <Button>Search</Button>
          </form>
          <div id="map"></div>

          <div className="addresses-wrapper">
            <h4>Búsquedas</h4>
            {addresses.length >= 1
              ? addresses.map((address, idx) => {
                  return <p key={idx}>{address}</p>;
                })
              : "Test"}
          </div>
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

        #map {
          height: 400px;
          width: 86%;
          max-width: 1065px;
          margin-bottom: 50px;
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
