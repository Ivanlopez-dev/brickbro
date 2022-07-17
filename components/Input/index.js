export default function Button({ children }) {
  return (
    <>
      <input id='address' name='address' type="text" placeholder="Address">
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
