import AppLayout from "../components/AppLayout";
import Button from "../components/Button"
import Input from "../components/Input"

const Map = () => {
  return (
    <>
      <AppLayout>
        <img src="/brickbro-logo.png" alt="Logo" />
        <form>
          <Input />
          <Button>Search</Button>
        </form>
        <h1>Map</h1>
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
    </>
  );
};

export default Map;
