import React from 'react'

export default class Slot extends React.Component {
    render(props) {
        let y = '';
        if (this.props.one === this.props.two && this.props.one === this.props.three) {
            y = 'You win';
        } else {
            y = 'Lost';
        }
        return (
            <div>
               <p>{this.props.one} {this.props.two} {this.props.three}</p>
               <p>{y}</p>
            </div>
        )
    }
}
