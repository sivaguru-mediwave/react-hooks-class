import React, { MutableRefObject, useEffect, useRef, useState } from 'react'

interface RefHookProps {}

const RefHook: React.FC<RefHookProps> = () => {
     const box = useRef() as MutableRefObject<HTMLInputElement>
     const [firstName, setFirstName] = useState('')
     const onSubmit = (e: any) => {
          e.preventDefault()
          console.log(box)
          console.log(box.current)
          console.log(box.current.value)
          // box.current.style.backgroundColor = 'dodgerblue'
          // box.current.value = 'Thank you'
     }
     useEffect(() => {
          box.current.focus()
     }, [])
     console.log('test console')
     return (
          <div className="container">
               <div className="card px-3 py-3 mb-4">
                    <h1>React useRef hook</h1>
                    <div className="card-body">
                         <h4>What are React useRef hook</h4>
                         <p>
                              The useRef hook in React is a quick and easy way
                              to access and mutate a DOM element without causing
                              a state change or re-render.
                              <br />
                              useRef returns an object with a current property.
                              This current property gets the initial value of
                              the argument passed to useRef hook. The reference
                              to "current" object will persist from render to
                              render.
                         </p>
                         <br />
                         <h4>useRef Example:</h4>
                         <form onSubmit={onSubmit}>
                              <div className="form-group">
                                   <label>First name</label>
                                   <input
                                        type="text"
                                        ref={box}
                                        name="firstName"
                                        id="box"
                                        className="form-control"
                                        placeholder="Enter your firstname"
                                        onChange={(e) =>
                                             setFirstName(e.target.value)
                                        }
                                   />
                              </div>
                              <button
                                   type="submit"
                                   className="btn btn-secondary mt-2"
                              >
                                   Submit
                              </button>
                              <br />
                              {firstName}
                         </form>
                    </div>
               </div>
          </div>
     )
}

export default RefHook
