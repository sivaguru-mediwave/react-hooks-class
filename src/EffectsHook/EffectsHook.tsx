import React, { useEffect, useState } from 'react'

interface EffectsHookProps {}

const EffectsHook: React.FC<EffectsHookProps> = () => {
     // Declare state variables
     const [count, setCount] = useState(0)
     const [product, setProduct] = useState('Eggs')

     // ***** Basic setup in useEffects
     //  useEffect(() => {
     //       call back function
     //  }, [])

     // ***** Cleanup useEffects
     // const [state, setState] = useState(window.innerWidth)
     // console.log(state)
     // const resizeD = () => {
     //      setState(window.innerWidth)
     // }

     // useEffect(() => {
     //      window.addEventListener('resize', resizeD)
     //      return () => {
     //           window.removeEventListener('resize', resizeD)
     //           console.log('removed')
     //      }
     // }, [state])

     // ***** The effect will run after every state update
     // useEffect(() => {
     //      console.log(`${product} will rule the world!`)
     // })

     // ***** Run Once on First Render
     // useEffect(() => {
     //      console.log('This runs once on first render')
     // }, [])

     // ***** Only re-run the effect if the value of product changes
     // useEffect(() => {
     //      console.log(`${product} will rule the world!`)
     // }, [product]) // Only re-run the effect if the value of product changes

     return (
          <div className="container">
               <div className="card px-3 py-3 mb-4">
                    <h1>React useEffect hook</h1>
                    <div className="card-body">
                         <h4>What are React useEffect hook</h4>
                         <p>
                              The useEffect Hook lets you perform side effects
                              in function components. Side effects are actions
                              that can run alongside the main operations of a
                              component, such as external API interactions,
                              modifying state variables, and data fetching.
                         </p>
                         <p>The useEffect hook accepts 2 arguments:</p>
                         <ul>
                              <li>
                                   <p>
                                        The function passed to useEffect is a
                                        callback function. This will be called
                                        after the component renders.
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        The second argument is an array, called
                                        the dependencies array. This array
                                        should include all of the values that
                                        our side effect relies upon. (props,
                                        context, and state variables)
                                   </p>
                              </li>
                         </ul>
                         <br />
                         <br />
                         <h4>useEffect Example:</h4>
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
                                   <label>Product</label>
                                   <input
                                        type="text"
                                        name="product"
                                        value={product}
                                        className="form-control"
                                        placeholder="Enter your product"
                                        onChange={(e) =>
                                             setProduct(e.target.value)
                                        }
                                   />
                              </div>
                              <br />
                              Change Product:{' '}
                         </form>
                         <hr />
                         <br />
                         <h4>Clean up function</h4>
                         <p>
                              1. After initial rendering, useEffect() invokes
                              the callback having the side-effect. cleanup
                              function is not invoked.
                         </p>
                         <p>
                              2. On later renderings, before invoking the next
                              side-effect callback, useEffect() invokes the
                              cleanup function from the previous side-effect
                              execution (to clean up everything after the
                              previous side-effect), then runs the current
                              side-effect.
                         </p>
                         <p>
                              3. Finally, after unmounting the component,
                              useEffect() invokes the cleanup function from the
                              latest side-effect.
                         </p>
                         <br />
                         <br />
                         {/* <h5>Window with: {state}</h5> */}
                    </div>
               </div>
          </div>
     )
}

export default EffectsHook
