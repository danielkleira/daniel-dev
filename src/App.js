import "./App.css";
import GlobalStyle from "./Styles/global";
import Providers from "./Providers";
import Body from "./Pages/Body";

function App() {
    

  return (
    <div className="App">
      <Providers>
        <GlobalStyle />
        <Body className="body"/>
      </Providers>
    </div>
  );
}

export default App;
