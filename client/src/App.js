import { NavBar } from "./components/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import { Modal } from "./components/Modal/Modal";
import { Root } from "./components/Root/Root";

const queryClient = new QueryClient();

function App() {

  let location = useLocation();
  
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
       
          <NavBar/>
          <Modal/>
          <Root location = {location}/>
        
      </QueryClientProvider>
      
    </div>
  );
}

export default App;
