import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import ContextHook from './ContextHook.tsx/ContextHook'
import EffectsHook from './EffectsHook/EffectsHook'
import ReactHooks from './ReactHooks'
import RefHook from './RefHook/RefHook'
import StateHook from './StateHook/StateHook'

function App() {
     return (
          <div className="container">
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-3 px-3 py-3 justify-content-between">
                    <div className="navbar-brand">React Hooks 16.8v</div>

                    <div className="collapse navbar-collapse">
                         <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                   <NavLink
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'activeClassName'
                                                  : undefined
                                        }
                                        to="/"
                                   >
                                        React hooks
                                   </NavLink>
                              </li>
                              <li className="nav-item">
                                   <NavLink
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'activeClassName'
                                                  : undefined
                                        }
                                        to="state-hook"
                                   >
                                        useState hook
                                   </NavLink>
                              </li>
                              <li className="nav-item">
                                   <NavLink
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'activeClassName'
                                                  : undefined
                                        }
                                        to="effect-hook"
                                   >
                                        useEffect hook
                                   </NavLink>
                              </li>
                              <li className="nav-item">
                                   <NavLink
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'activeClassName'
                                                  : undefined
                                        }
                                        to="ref-hook"
                                   >
                                        useRef hook
                                   </NavLink>
                              </li>
                              <li className="nav-item">
                                   <NavLink
                                        className={({ isActive }) =>
                                             isActive
                                                  ? 'activeClassName'
                                                  : undefined
                                        }
                                        to="context-hook"
                                   >
                                        useContext hook
                                   </NavLink>
                              </li>
                         </ul>
                    </div>
               </nav>
               <Routes>
                    <Route path="/" element={<ReactHooks />} />
                    <Route path="state-hook" element={<StateHook />} />
                    <Route path="effect-hook" element={<EffectsHook />} />
                    <Route path="ref-hook" element={<RefHook />} />
                    <Route path="context-hook" element={<ContextHook />} />
               </Routes>
          </div>
     )
}

export default App
