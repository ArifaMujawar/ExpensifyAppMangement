class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount(){
        const json = localStorage.getItem('count');
        const num = parseInt(json, 10);
        if(!isNaN(num)){
            this.setState({count : num});
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }
  
    handleAddOne(){
        console.log('add one');
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        console.log('minus one');
        this.setState((prevState)=>{
            return{
                count: prevState.count -1 
            };
        });
    }
    handleReset(){
        console.log('reset');
        this.setState(()=>{
            return{
                count: 0
            };
        });
    }
    render(){
        return (
            <div>
                <p>Count:{this.state.count}</p>
                <button onClick={this.handleAddOne}>+</button>
                <button onClick={this.handleMinusOne}>-</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
} 

ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;
// const addOne = ()=> {
//     count++;
//     reactCounterApp();
//  console.log('add one');       
// };

// const MinusOne = ()=> {
//     count--;
//     reactCounterApp();
//     console.log('Minus one');       
//    };

   
//   const Reset = ()=> {
//     count = 0;
//     reactCounterApp();
//     console.log('Reset');       
// };
// const reactCounterApp = () =>{
 
//     const counter = (
//         <div>
//         <h1>Count: {count} </h1>
//         <button onClick = {addOne}>Add</button>
//         <button onClick = {MinusOne}>Minus</button>
//         <button onClick = {Reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(counter, appRoot);
// }

// let appRoot = document.getElementById('app');


// reactCounterApp();