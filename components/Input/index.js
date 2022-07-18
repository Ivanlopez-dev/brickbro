export default function Button({ children, setAddress }) {

  const handleChange = (e) => {
    e.preventDefault();
    if(setAddress){
      setAddress(e.target.value);

    }

    console.log(e);
  };

  return (
    <>
      <input onChange={handleChange} id='address' name='address' type="text" placeholder="Address">
        {children}
      </input>
      <style jsx>{`
        input {
          height: 40px;
          width: 80%;
          padding-left: 10px;
          margin: 24px;
          border: 1px;
          border-radius: 5px;
          background-color: #ececec;
        }
      `}</style>
    </>
  );
}
