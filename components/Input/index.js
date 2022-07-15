export default function Button({ children, onClick }) {
  return (
    <>
      <input type="text" placeholder="Address">
        {children}
      </input>
      <style jsx>{`
        input {
          width: 45%;
          padding: 12px 20px;
          margin: 24px;
          border: 1px;
          border-radius: 5px;
          background-color: #ececec;
        }
      `}</style>
    </>
  );
}
