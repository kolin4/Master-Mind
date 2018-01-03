import React from 'react';

class Title extends React.Component {
    render(){
        return (
            <div className="title">
                <div className="text"><span onClick={this.props.action} data-color='red circleAnswer' className='m'>M</span> <span onClick={this.props.action} data-color='yellow circleAnswer' className='a'>A</span> <span onClick={this.props.action} data-color='blue circleAnswer' className='s'>S</span><span data-color='green circleAnswer' onClick={this.props.action} className='t'>T</span><span data-color='orange circleAnswer' onClick={this.props.action} className='e'>E</span><span data-color='brown circleAnswer' onClick={this.props.action} className='r'>R</span>&nbsp;  M I N D</div>
                <div className="social"></div>
            </div>
        )
    }
}

export {Title};
