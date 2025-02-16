
import './App.css';
import {useEffect, useState} from "react";
import MainPage from "./pages/mainPage/MainPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

function App() {
  const [user, setUser] = useState({
    name: "",
    lastName: ""
  })
  const [page, setPage] = useState(null)
  useEffect(() => {
    const name = prompt('Enter your name');
    const lastName = prompt('Enter your lastName')
    setUser({name, lastName})
    if (name === 'John' && lastName === 'Johns') {
      setPage("main")
    }else{
      setPage("error")
    }
  }, []);
  return (
    <div className="App">
      {page === "main" && <MainPage user={user}/>}
      {page === "error" && <ErrorPage user={user}/>}
    </div>
  );
}

export default App;
