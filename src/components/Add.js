/// создание проводок
import Moment from 'react-moment';//форматирование даты
import React from "react";

class Add extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '',  sum: 0};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  render() {
  
    const Summ = () => {
          
    this.state.sum += parseFloat(this.state.text);
    //parseFloat(this.state.text)+parseFloat(document.getElementById('itogo').innerHTML)
   // document.getElementById(this.state.items.id).innerHTML = "итого: "+this.state.sum;
    } 
    return (
       
      <div class="intocontent">
        
          <AddList items={this.state.items}  />
          <div><span id="titleitogo">Итого:</span> <span id="itogo">{ this.state.sum}</span></div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-summ">
            Сумма: 
            </label>
            <input
              type="number"
              id="new-summ"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button onClick={Summ}>
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
    return (<>
      <ul>
        {this.props.items.map(item => (
          <li key={item.id} ><Moment format="DD.MM.YYYY" date={item.id} class="date" /> {item.text} <span id={item.id}></span>
          </li>
        ))}
        
      </ul >
      
      </>
    );
  }
}
  export default Add;
