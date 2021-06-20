import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Main()
{
  return <div class="content">
  
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2>
  <h2>Главная</h2></div>
}
///начало для добавления проводок
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div class="intocontent">
        <AddList items={this.state.items}  />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-summ">
          Сумма: 
          </label>
          <input
            id="new-summ"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Добавить #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

}
class AddList extends React.Component {
  render() {
  return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul >
  );
  }
}
///конец для добавления проводок

function Spend()
{
  return <><div class="content"><h2>Траты</h2>
    <Add /></div>
   </>
}
function Profit()
{
  return <><div class="content"><h2>Доходы</h2>
  <Add /></div></>
}
function Transfer()
{
  return <><div class="content"><h2>Переводы</h2>
    <Add /></div>
  </>
}
function Enter()
{
  return<div class="content"><h2>Вход</h2></div>
}
function NotFound()
{
  return <div class="content"><h2>Упс, ничего не найдено!</h2>
  <img src="../img/family.jpg" alt="notfound"/></div>
}


function NavMenu() {
  ///начало изменения цвета меню при нажатии
  let colSet = "green";
  let colUnset = "#333";
  const stateMain = () => {
    document.getElementById("main").style.backgroundColor = colSet;
    document.getElementById("spend").style.backgroundColor = colUnset;
    document.getElementById("profit").style.backgroundColor = colUnset;
    document.getElementById("transfer").style.backgroundColor = colUnset;
    document.getElementById("enter").style.backgroundColor = colUnset;
  };
  const stateSpend = () => {
    document.getElementById("main").style.backgroundColor = colUnset;
    document.getElementById("spend").style.backgroundColor = colSet;
    document.getElementById("profit").style.backgroundColor = colUnset;
    document.getElementById("transfer").style.backgroundColor = colUnset;
    document.getElementById("enter").style.backgroundColor = colUnset;
  }
   const stateProfit = () => {
    document.getElementById("main").style.backgroundColor = colUnset;
    document.getElementById("spend").style.backgroundColor = colUnset;
    document.getElementById("profit").style.backgroundColor = colSet;
    document.getElementById("transfer").style.backgroundColor = colUnset;
    document.getElementById("enter").style.backgroundColor = colUnset;
   }
    const stateTransfer = () => {
    document.getElementById("main").style.backgroundColor = colUnset;
    document.getElementById("spend").style.backgroundColor = colUnset;
    document.getElementById("profit").style.backgroundColor = colUnset;
    document.getElementById("transfer").style.backgroundColor = colSet;
    document.getElementById("enter").style.backgroundColor = colUnset;
    }
   const stateEnter = () => {
    document.getElementById("main").style.backgroundColor = colUnset;
    document.getElementById("spend").style.backgroundColor = colUnset;
    document.getElementById("profit").style.backgroundColor = colUnset;
    document.getElementById("transfer").style.backgroundColor = colUnset;
    document.getElementById("enter").style.backgroundColor = colSet;
  }
///конец изменения цвета меню при нажатии


  return (
    <>
      <div id="navbar">
  <div class="text-center"><h1><span id="family">Family</span><span id="money" class="badge">Money</span></h1></div>
        <Link to="/" onClick={stateMain}  id="main">Главная</Link>
        <Link to="/spend" onClick={stateSpend} id="spend">Траты</Link>
        <Link to="/profit" onClick={stateProfit} id="profit">Доходы</Link>
        <Link to="/transfer" onClick={stateTransfer} id="transfer">Переводы</Link>
        <Link to="/enter" onClick={stateEnter} id="enter">Вход</Link>
  </div>
    </>
  );
}
export default function App() {
  

  return <>
    <Router>
        <div>
          <NavMenu class="position-sticky"/>
        <Switch>
            <Route exact path="/" component={Main}  />
            <Route path="/spend" component={Spend} />
            <Route path="/profit" component={Profit} />
            <Route path="/transfer" component={Transfer} />
            <Route path="/enter" component={Enter} />
            <Route component={NotFound} />
          </Switch>
        </div>
    </Router>
    </>
}

