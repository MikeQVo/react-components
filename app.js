// TODO
var groceryList = { 0: 'Milk', 1: 'Eggs'};

// var GroceryList = () => (
//   <div class="grocerylist">
//     <Milk />
//     <Eggs />
//   </div>
// );

var Milk = () => {
  <div>Milk</div>
};

var Eggs = () => {
  <div>Eggs</div>
};

class GroceryListItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick(){
    this.setState({
      done: !this.state.done
    })
  }

  render(){
    var style = {
      textDecoration: this.state.done ? 'line-through': 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(bind)}>{this.props.item}</li>
    );
  }
}


var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
      )}
  </ul>
);

ReactDom.render(<GroceryList items={['Milk', 'Eggs']}/>, document.getElementById('app'));

