import React, { createContext, Component } from 'react';

export const initialState = {
    dueDate: new Date(),
    activity_level: 0,
    goal: null,
    positionValue:[
        180,
        240,
        290,
        350,
        400,
        450
    ]
};

export const PregaContext = createContext(initialState);



export class PregaProvider extends Component {

    state = {
        dueDate: new Date(),
        activity_level: 0,
        goal: null,
        positionValue:[
            180,
            240,
            290,
            350,
            400,
            450
        ]
    };
    render() {
        return (
            <PregaContext.Provider
            value={{
                state: this.state,
                setDueDate: newDate => {
                    this.setState({
                        dueDate: newDate
                    })
                },
                setGoal: newGoal => {
                    this.setState({
                        goal: newGoal
                    })
                },
                setActivityLevel: level => {
                    this.setState({
                        activity_level: level
                    })
                },
                getPosition: () => {
                    return this.state.positionValue[this.state.activity_level] || 180;
                },
                getActivityLevel: () => {
                    return this.state.activity_level
                }
            }}
            >
                {this.props.children}
            </PregaContext.Provider>
        )
    }
}
export const PregaConsumer = PregaContext.Consumer;