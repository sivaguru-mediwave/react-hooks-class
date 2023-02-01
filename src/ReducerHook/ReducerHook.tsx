import React, { useEffect, useReducer, useRef } from 'react'

interface ReducerHookProps {}

const initialState = {
     isRunning: false,
     time: 0,
}

function reducer(state: any, action: any) {
     switch (action.type) {
          case 'start':
               return { ...state, isRunning: true }
          case 'stop':
               return { ...state, isRunning: false }
          case 'reset':
               return { isRunning: false, time: 0 }
          case 'tick':
               return { ...state, time: state.time + 1 }
          default:
               throw new Error()
     }
}

const ReducerHook: React.FC<ReducerHookProps> = () => {
     const [state, dispatch] = useReducer(reducer, initialState)
     const idRef = useRef(0) as any
     useEffect(() => {
          if (!state.isRunning) {
               return
          }
          idRef.current = setInterval(() => dispatch({ type: 'tick' }), 1000)
          return () => {
               clearInterval(idRef.current)
               idRef.current = 0
          }
     }, [state.isRunning])
     return (
          <div className="container">
               <div className="card px-3 py-3 mb-4">
                    <h1>React useReducer hook</h1>
                    <div className="card-body">
                         <h4>What are React useReducer hook</h4>
                         <p>
                              The useReducer hook allows you to manage state in
                              a functional component and it also provides a
                              function that updates the state and re-renders the
                              component. It is very similar to the useState hook
                              but has a few advantages in certain cases which we
                              will discuss later in the Choosing between
                              useReducer and useState section.
                         </p>
                         <ul>
                              <li>
                                   <p>
                                        state: the state returned by useReducer.
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        dispatch: a function used to update the
                                        state.
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        reducer: a function that takes 2
                                        arguments: the first one is the previous
                                        state and the second one is an action
                                        which is an object containing
                                        information used for updating the state
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        initialState: the state at the
                                        beginning.
                                   </p>
                              </li>
                         </ul>
                         <p>Choosing between useReducer and useState</p>
                         <ul>
                              <li>
                                   <p>
                                        useReducer is better when you have kind
                                        of connected and complex states. You can
                                        write some logic that basically runs
                                        whenever you want to change the state to
                                        do more complex updates than just set a
                                        new value.
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        useState is better when your states are
                                        NOT complex and interdependent. In these
                                        cases, using useState makes your code
                                        much shorter and easier to understand
                                        than using useReducer.
                                   </p>
                              </li>
                         </ul>
                         <br />
                         <h4>useReducer Example:</h4>
                         <div>
                              <div>{state.time}s</div>
                              <button
                                   className="btn btn-secondary"
                                   onClick={() => dispatch({ type: 'start' })}
                              >
                                   Start
                              </button>
                              <button
                                   className="btn btn-primary m-3"
                                   onClick={() => dispatch({ type: 'stop' })}
                              >
                                   Stop
                              </button>
                              <button
                                   className="btn btn-danger m-3"
                                   onClick={() => dispatch({ type: 'reset' })}
                              >
                                   Reset
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ReducerHook
