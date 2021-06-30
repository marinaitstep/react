
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import React from "react";
import LoginContainer from './containers/LoginContainer'
import MainContainer from './containers/MainContainer'
import ProfitContainer from './containers/ProfitContainer'
import SpendContainer from './containers/SpendContainer'
import TransferContainer from './containers/TransferContainer'
import NotFound from './components/NotFound'
import Out from "./components/Out";

//import cors from 'cors';
// const server = express();
// server.use(cors());



function NavMenu() {
  ///начало изменения цвета меню при нажатии
  let colSet = "green";
  let colUnset = "#333";
  const stateMain = () => {
    document.getElementById("main").style.backgroundColor = colSet;
    document.getElementById("spend").style.backgroundColor = colUnset;
    document.getElementById("profit").style.backgroundColor = colUnset;
    document.getElementById("transfer").style.backgroundColor = colUnset;
    document.getElementById("out").style.backgroundColor = colUnset;
  };
  const stateSpend = () => {
    document.getElementById("main").style.backgroundColor = colUnset;
    document.getElementById("spend").style.backgroundColor = colSet;
    document.getElementById("profit").style.backgroundColor = colUnset;
    document.getElementById("transfer").style.backgroundColor = colUnset;
    document.getElementById("out").style.backgroundColor = colUnset;
  }
   const stateProfit = () => {
    document.getElementById("main").style.backgroundColor = colUnset;
    document.getElementById("spend").style.backgroundColor = colUnset;
    document.getElementById("profit").style.backgroundColor = colSet;
    document.getElementById("transfer").style.backgroundColor = colUnset;
    document.getElementById("out").style.backgroundColor = colUnset;
   }
    const stateTransfer = () => {
    document.getElementById("main").style.backgroundColor = colUnset;
    document.getElementById("spend").style.backgroundColor = colUnset;
    document.getElementById("profit").style.backgroundColor = colUnset;
    document.getElementById("transfer").style.backgroundColor = colSet;
    document.getElementById("out").style.backgroundColor = colUnset;
    }
   const stateOut = () => {
    document.getElementById("main").style.backgroundColor = colUnset;
    document.getElementById("spend").style.backgroundColor = colUnset;
    document.getElementById("profit").style.backgroundColor = colUnset;
    document.getElementById("transfer").style.backgroundColor = colUnset;
    document.getElementById("out").style.backgroundColor = colSet;
  }
///конец изменения цвета меню при нажатии


  return (
    <>
      <div id="navbar">
  <div class="text-center"><h1><span id="family">Family</span><span id="money" class="badge">Money</span></h1></div>
        <Link to="/main" onClick={stateMain}  id="main">Баланс</Link>
        <Link to="/spend" onClick={stateSpend} id="spend">Траты</Link>
        <Link to="/profit" onClick={stateProfit} id="profit">Доходы</Link>
        <Link to="/transfer" onClick={stateTransfer} id="transfer">Переводы</Link>
        <Link to="/out" onClick={stateOut} id="out">Выход</Link>
        {/* <Link to="/"  id="enter">Вход</Link> */}
        
  </div>
    </>
  );
}
export default function App() {
  // const [data, setData] = useState({})
  // useEffect(function () {
  //     const url = 'http://localhost:3000/';
  //     fetch(url, {
  //       method: 'POST',
  //        headers: {
  //          'Content-Type': 'application/json;charset=utf-8',
  //          'Access-Control-Allow-Origin': '*',
  //        }
  //     }).then(res => {
  //        setData(res.data) 
  //     });
  //     console.log(data)
  // }, []);
	
  return <>
    <Router>
        <div>
          <NavMenu class="position-sticky"/>
        <Switch>
			<Route exact path="/" component={LoginContainer} />
			<Route path="/main" component={MainContainer} />
            <Route path="/spend" component={SpendContainer} />
            <Route path="/profit" component={ProfitContainer} />
			<Route path="/transfer" component={TransferContainer} />
				  {/* <Redirect from="/out" to="/" /> */}
           	<Route path="/out" component={Out} />
            <Route component={NotFound} />
          </Switch>
        </div>
    </Router>
 {/* <div>
      <h1>Server</h1>
      <p>{data.login}</p>
    </div> */}
    
    </>
}

