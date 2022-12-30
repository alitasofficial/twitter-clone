import Container from "./layouts/Container";
import Main from "./layouts/Main";
import Sidebar from "./layouts/Sidebar";
import Timeline from "./layouts/Timeline";
import "./App.css";

function App() {
  return (
    <Container>
      <Sidebar />
      <Main />
      <Timeline />
    </Container>
  );
}

export default App;
