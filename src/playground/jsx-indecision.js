console.log('here i come');
console.log('App.js is running!');

// JSX - JavaScript XML
let template = <h1>Indecision App</h1>;

const obj = {
    title: 'Feathers',
    subtitle: 'little bird',
    options: []
};
const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        obj.options.push(option);
        console.log(obj);
        console.log('added');
        e.target.elements.option.value = '';
    }
    renderApp();
};

const RemoveAll = () => {
    obj.options = [];
    console.log(obj.options.length);
    renderApp(); 
};

const onMakeDecision = () => {
    const random = Math.floor(Math.random() * obj.options.length);
    const option = obj.options[random];
    alert(option);
};

const renderApp = () =>{
 
    const form = (
        <div>
        <h1>{obj.title}</h1>
        {obj.subtitle && <p>{obj.subtitle}</p>}
        {obj.options.length > 0 ?'Here are your options':'No options'}
        <button disabled = {obj.options.length === 0} onClick = {onMakeDecision}>What should I do?</button>
        <button onClick = {RemoveAll}>Remove All</button>
        {
            obj.options.map((op)=>{
                return <p key = {op}>{op}</p>;
            })
        }
        <p>Count: {obj.options.length}</p>
        <form onSubmit = {onFormSubmit}>
            <input type ="text" name = "option"></input>
            <button>Add Option</button>
        </form>
    </div>
    );

    ReactDOM.render(form, appRoot);
}

let appRoot = document.getElementById('app');


renderApp();