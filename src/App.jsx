import { useTypewriter, Cursor } from "react-simple-typewriter";

function App() {
  const [text] = useTypewriter({
    words: ["Developer", "Designer"],
    loop: {},
    typeSpeed: 110,
    deleteSpeed: 60,
  });

  return (
    <>
      <h1 style={{ margin: "5px" }}>
        I'm a <span style={{ fontWeight: "bold", color: "green" }}>{text}</span>.
      </h1>
      <span style={{ color: "red" }}>
        <Cursor />
      </span>
    </>
  );
}

export default App;
