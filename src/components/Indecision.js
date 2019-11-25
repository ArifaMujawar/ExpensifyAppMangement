import React from 'react';
import Options from './Options';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
    state = {
        options : [],
        selectedOption:undefined
    };
    
    componentDidMount(){
        try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options){
            this.setState(() => ({ options}));
        }
    }catch(e){
        // do nothing
    }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    handleDeleteOptions=()=> {
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption=(optionToRemove)=>{
        this.setState((prevState) => ({
            options: prevState.options.filter((option)=> {
                return optionToRemove !== option;
            }) 
        }));
    };
    handlePick=()=>{      
        console.log(this.state.options.length);
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({
            selectedOption : option
        }));
    };
    handleAddOption=(option)=>{
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
       this.setState((prevState)=>({
        options: prevState.options.concat(option)
       }));
    };
    handleModal= () => {
        this.setState(()=> ({
            selectedOption: undefined
        }));
    }
    render() {
        const title = 'hello there';
        const subTitle = 'Put your life in hands of a Computer';
        
        return (
            <div>
                <Header title = {title} subTitle = {subTitle}/>
                <div className="container">
                    <Action hasOptions = {this.state.options.length > 0}
                 handlePick = {this.handlePick}/>
                    <Options options = {this.state.options} 
                 handleDeleteOptions = {this.handleDeleteOptions} 
                 handleDeleteOption= {this.handleDeleteOption}/>
                    <AddOption handleAddOption ={this.handleAddOption} />
                </div>
                <OptionModal 
                selectedOption = {this.state.selectedOption}
                handleModal = {this.handleModal}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};