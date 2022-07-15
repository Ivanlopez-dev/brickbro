export default function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          width: 20%;
          padding: 12px 20px;
          border: 0;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: opacity 0.3s ease;
        }

        button:hover {
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}
