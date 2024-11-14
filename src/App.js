import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./router/AppRouter";

function App() {
    return (
        <BrowserRouter>
           <>
               <Header/>
               <main>
                   <AppRouter />
               </main>
               <Footer/>
           </>
        </BrowserRouter>
    );
}

export default App;
