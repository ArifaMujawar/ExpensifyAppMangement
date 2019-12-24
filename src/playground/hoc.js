//Higher Order Component HOC
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
   <div>
    <h1>Info </h1>
    <p>The info is: {props.info} </p>
   </div>
);

const WithAdminInfo = (WrappedComponent) => {
   return (props)=>(
    <div>
        {props.isAdmin && <p>Here is some Admin data</p>}
        <WrappedComponent {...props} />
    </div>
     );
   };

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAuthenticated ? <p>Welcome, you have logged in</p>: <p>Please login in</p>}
           <WrappedComponent {...props}/>
        </div>
    );
};   
const AdminInfo = WithAdminInfo(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo  isAuthenticated= {false} info = {'This is some info'} />, document.getElementById('app'));