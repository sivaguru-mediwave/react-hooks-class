import React, { useState } from 'react'
import stateImage from '../assets/img/usestate.png'

interface StateHookProps {}

const StateHook: React.FC<StateHookProps> = () => {
     // Declare a new state variable, which we'll call "count"
     const [count, setCount] = useState(0)
     const [firstName, setFirstName] = useState('')
     return (
          <div className="container">
               <div className="card px-3 py-3 mb-4">
                    <h1>React useState hook</h1>
                    <div className="card-body">
                         <h4>What are React useState hook</h4>
                         <p>
                              The useState Hook allows you to create, update,
                              and manipulate state inside functional components.
                              <br />
                              React has this concept of state, which are
                              variables that hold data that our components
                              depend on and may change over time. Whenever these
                              variables change, React updates the UI by
                              re-rendering the component in the DOM with the
                              current values of the state variables.
                         </p>
                         <p>
                              The hook takes a single optional argument: an
                              initial value for the state. Then it returns an
                              array of two values:
                         </p>
                         <ul>
                              <li>
                                   <p>The state variable</p>
                              </li>
                              <li>
                                   <p>A function to update the state</p>
                              </li>
                         </ul>
                         <img className="state-image" src={stateImage} alt="" />
                         <br />
                         <br />
                         <h4>useState Example:</h4>
                         <div>
                              <br />
                              <h5>Current Cart Count: {count}</h5>
                              <div>
                                   <button
                                        onClick={() => setCount(count - 1)}
                                        type="button"
                                        className="btn btn-secondary"
                                   >
                                        Remove from cart
                                   </button>
                                   <button
                                        onClick={() => setCount(count + 1)}
                                        type="button"
                                        className="btn btn-primary m-3"
                                   >
                                        Add to cart
                                   </button>
                              </div>
                         </div>
                         <hr />
                         <form>
                              <div className="form-group">
                                   <label>First name</label>
                                   <input
                                        type="text"
                                        name="firstName"
                                        className="form-control"
                                        placeholder="Enter your firstname"
                                        onChange={(e) =>
                                             setFirstName(e.target.value)
                                        }
                                   />
                              </div>
                              <br />
                              {firstName}
                         </form>
                    </div>
               </div>
          </div>
     )
}

export default StateHook
