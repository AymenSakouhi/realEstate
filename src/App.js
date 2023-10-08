import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Main from "./components/pages/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Main />

      <Banner title={"Find your best Real Estate"} buttonTitle={"CONTACT US"} />

      <Footer />
    </div>
  );
}
export default App;
