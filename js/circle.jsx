import React from 'react';


class Circle extends React.Component{
    render(){
        return(
            <div onClick={this.props.action} className={this.props.class}  data-color={this.props.color}></div>
        )
    }
}


export {Circle};
