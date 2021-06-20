/// создание проводок
import React from "react";
class Add extends React.Component {
    constructor(props) {
      super(props);
      this.currDate = new Date().toLocaleDateString;
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
            <li key={item.id}>{item.id} {item.text}</li>
          ))}
        </ul >
    );
    }
  }

  export default Add;
