import React from 'react';

class Button extends React.Component{
    render(){
        return (
            <button disabled={this.props.disabled} onClick={this.props.action}>{this.props.name}</button>
        )
    }
}


export {Button};
