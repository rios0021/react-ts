import { stat } from "fs";
import { useReducer } from "react";

const initialState = {
    counter: 10
}

type ActionType = 
    | { type: 'add' }
    | { type: 'substract' }

const countReducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case 'add':
            return{
                ...state,
                counter: state.counter+1
            }
        case 'substract':
            return{
                ...state,
                counter: state.counter-1
            }
    
        default:
            return state;
    }
}


export const CountReducer = () => {

    const [counterState, dispatch] = useReducer(countReducer, initialState)
    
    return (
        <>
            <h2>Counter: {counterState.counter}</h2>
            <button className="btn btn-outline-success"
                onClick={() => dispatch({type: 'add'})}
            >
                Add 1
            </button>
            <button className="btn btn-outline-success"
                onClick={() => dispatch({type: 'substract'})}
            >
                Substract 1
            </button>
        </>
    )
}