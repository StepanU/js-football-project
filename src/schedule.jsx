import React from 'react'

export class Schedule extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id : props.match.params.id
        };
    }

    render(){
        return(
            <div>
                SCHEDULE ID {this.state.id}
            </div>
        )
    }
}

