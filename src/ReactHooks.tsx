import React, { useEffect, useState } from 'react'

interface ReactHooksProps {}

const ReactHooks: React.FC<ReactHooksProps> = () => {
     // 1. Use the name state variable
     const [name, setName] = useState('Mary')

     // 2. Use an effect for persisting the form
     useEffect(function persistForm() {
          localStorage.setItem('formData', name)
     })

     // 3. Use the surname state variable
     const [surname, setSurname] = useState('Poppins')

     // 4. Use an effect for updating the title
     useEffect(function updateTitle() {
          document.title = name + ' ' + surname
     })

     // ------------
     // First render
     // ------------
     // useState('Mary') // 1. Initialize the name state variable with 'Mary'
     // useEffect(persistForm) // 2. Add an effect for persisting the form
     // useState('Poppins') // 3. Initialize the surname state variable with 'Poppins'
     // useEffect(updateTitle) // 4. Add an effect for updating the title

     return (
          <div className="container">
               <div className="card px-3 py-3 mb-4">
                    <h1>React Hooks</h1>
                    <div className="card-body">
                         <h4>What are React Hooks?</h4>
                         <p>
                              React Hooks are simple JavaScript functions that
                              we can use to isolate the reusable part from a
                              functional component. Hooks can be stateful and
                              can manage side-effects.
                         </p>
                         <h4>Rules of Using React Hooks</h4>
                         <ul>
                              <li>
                                   <p>
                                        Only call hooks at the top level of a
                                        component: You shouldn’t use Hooks
                                        inside loops, conditions, or nested
                                        functions. Instead, always use Hooks at
                                        the top level of your React function,
                                        before any return keyword.
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        Only call hooks from React Functions:
                                        Never call Hooks from regular JavaScript
                                        functions. You can: ✅ Call Hooks from
                                        React functional components. ✅ Call
                                        Hooks from custom Hooks.
                                   </p>
                              </li>
                         </ul>
                         <h4>
                              React provides a bunch of standard in-built hooks:
                         </h4>
                         <ul>
                              <li>
                                   <p>
                                        <b>useState:</b> To manage states.
                                        Returns a stateful value and an updater
                                        function to update it.
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        <b>useEffect:</b> To manage side-effects
                                        like API calls, subscriptions, timers,
                                        mutations, and more.
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        <b>useRef:</b> It returns a ref object
                                        with a .current property. The ref object
                                        is mutable. It is mainly used to access
                                        a child component imperatively.
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        <b>useContext:</b> To return the current
                                        value for a context.
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        <b>useReducer:</b> A useState
                                        alternative to help with complex state
                                        management.
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        <b>useCallback:</b> It returns a
                                        memorized version of a callback to help
                                        a child component not re-render
                                        unnecessarily.
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        <b>useMemo:</b> It returns a memoized
                                        value that helps in performance
                                        optimizations.
                                   </p>
                              </li>
                              <li>
                                   <p>
                                        <b>useLayoutEffect:</b> It fires at the
                                        end of all DOM mutations. It's best to
                                        use useEffect as much as possible over
                                        this one as the useLayoutEffect fires
                                        synchronously.
                                   </p>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     )
}

export default ReactHooks
