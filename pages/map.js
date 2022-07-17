import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppLayout from "../components/AppLayout";
import Button from "../components/Button";
import Input from "../components/Input";

const Map = () => {
  const [address, setAddress] = useState('');
  const [addresses, setAddresses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setAddress(router.query.address);
    setAddresses(addresses.push(router.query.address))

    console.log(addresses);
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    setAddress(event.target.address.value);
    setAddresses(addresses.push(event.target.address.value))

    console.log(address);
  };

  return (
    <>
      <AppLayout>
        <div className="map-wrapper">
          <img src="/brickbro-logo.png" alt="Logo" />
          <form className="form-wrapper" onSubmit={handleClick}>
            <Input />
            <Button>Search</Button>
          </form>
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
