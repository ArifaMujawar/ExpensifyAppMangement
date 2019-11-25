class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState)=> {
           return { 
               visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide Details' : 'Show Details'}
            </button> 
            {this.state.visibility && (
                <div>
                    <p>Here are some details</p>
                </div>
            )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// let toggle = false;

// const onToggle = () => {
//     toggle = !toggle;
//     console.log('within toggle', toggle);
//     renderApp();
// };

// const renderApp = () => {
//     const toggler = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggle}>
//                 {toggle ? 'Hide Details' : 'Show Details'}
//                 {toggle}
//             </button> 
//             {toggle && (
//                 <div>
//                     <p>Here are some details</p>
//                 </div>
//             )}
            
//         </div>
//     );
//     ReactDOM.render(toggler, document.getElementById('app'));
// }
// renderApp();
// <button onClick={this.handleToggleVisibility} >
//                 {this.state.visibility ? 'Hide Details' : 'Show Details'}
//                 </button>
//                 {this.state.visibility && (
//                     <div>
//                         <p>Here are some details</p>
//                     </div>
//                 )}

