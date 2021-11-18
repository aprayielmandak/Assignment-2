// import Comment from './components/Comment';

// const komentar = {
//   text: "This is my commentar",
//   date: new Date(),
//   author: {
//     avatarUrl: "https://via.placeholder.com/60",
//     name: "John Doe"
//   }
// };

// import HomePage from './pages/HomePage';
// import EmployeePage from './pages/EmployeePage';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

// function App() {
//   return(
//     <Router>
//       <div>
//         {/* <Comment text={komentar.text} date={komentar.date} author={komentar.author} /> */}

//         <Switch>
//           <Route exact path="/" component={HomePage} />
//           <Route path="/employee" component={EmployeePage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// import ExampleStateHook from './components/ExampleStateHook';
// import Counter from './components/Counter';

// import Penghitung from './components/Penghitung';

import Todos from './components/todos/Todos';

function App() {
  return(
    <div>
      <Todos />
    </div>
  );
}

export default App;


// import React, { useState, useMemo } from 'react';
// import { Routes, Route, Link } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import { UserContext } from './UserContext';

// function App()  {
//   const [ user, setUser ] = useState('Assignment2');

//   const userValueProvider = useMemo(() => ({user, setUser}), [user, setUser]);

//   return(
//     <div>
//       <nav>
//         <div class="navbar navbar-expand-md container-fluid pt-3 pb-3 mb-5" style={{backgroundColor: 'black', fontSize: '16px'}}>
//           <Link to="/" class="nav-link" style={{color: 'pink'}}>Home</Link> | <Link to="/about" class="nav-link" style={{color: 'pink'}}>About</Link>
//         </div>
//       </nav>

//       <UserContext.Provider value={userValueProvider}>
//         <Routes>
//           <Route path="/" element={<Home />}  />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </UserContext.Provider>
//     </div>
//   );
// }

// export default App;
