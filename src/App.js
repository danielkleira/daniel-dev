import "./App.css";
import GlobalStyle from "./Styles/global";
import Providers from "./Providers";
import Body from "./Pages/Body";
import ParticlesBg from 'particles-bg'
import Routes from "./Routes";


function App() {

  
  return (
    <div className="App">
      <Providers className="Providers">
      <ParticlesBg className="particles" color="#002900" num={200} type="cobweb" bg={true} />
      
        <Body className="body" />
        <GlobalStyle />
      </Providers>
    </div>
  );
}

export default App;
