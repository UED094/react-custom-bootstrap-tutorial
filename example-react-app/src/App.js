import { useState } from 'react';
import './App.css';
import { 
   BrowserRouter, 
   Route, 
   Routes, 
   Link
} from "react-router-dom";



function TodoList() {

   const [task, setTask] = useState("");
   const [taskItems, setTaskItems] = useState([]);

   function addItem(event) {
    event.preventDefault();

    if (task.trim() !== "") {
       const newItem = {
          key: Date.now(),
          text: task
       };

       setTaskItems(prevItems => [...prevItems, newItem]);
       setTask("");
    }

    event.target.task.focus();
 }

   function deleteItem(key) {
    setTaskItems(prevItems => prevItems.filter(
       item => item.key !== key));
 }


   return (
      <div classNameName='container'>
         <div className="p-5 bg-warning text-white rounded">
            <h1>Todo List</h1>
         </div>
         <div className='container'>
                     <form onSubmit={addItem}>
            <label htmlFor="task">Task?</label>
            <div className="mb-3">
            <input id="task" type="text" className="form-control"
              autoFocus 
               value={task} onChange={(e) => setTask(e.target.value)} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
         <button type="submit" className="btn btn-primary">Submit</button>
         </form>
         </div>

         <TodoItems items={taskItems} delete={deleteItem}/>
      </div>
   );
}

function TodoItems(props) {

  const todoItems = props.items;

  return (
   <div className='container'>
      <ul class="list-group">
      {todoItems.map((item) =>
           <li className="list-group-item gap-2" key={item.key}>
            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..."/>
            <span className='m-2'>{item.text}</span>
            <span>
            <button type="button" class="btn btn-outline-danger" onClick={() => props.delete(item.key)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
               </svg>
                Button
              </button> 
              </span>
              

           </li>
        )}
      </ul>
   </div>

  );
}

function NavBar() {
   return (
     <nav className="navbar navbar-expand-lg navbar-danger bg-warning">
         <div className="container-fluid">
             <a className="navbar-brand" href="/">Navbar</a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNav">
       <ul className="navbar-nav">
         <li className="nav-item">
         <Link className="nav-link" to="/">Home</Link>
         </li>
         <li className="nav-item">
         <Link className="nav-link" to="/products">Products</Link>
         </li>
         <li className="nav-item">
         <Link className="nav-link" to="/about">About</Link>
         </li>
         <li className="nav-item">
           <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
         </li>
       </ul>
     </div>
   </div>
 </nav>
   )
 }



function Home() {
   return(
    <>
        <h1 className='bg-coral p-3'>Home</h1>
        <TodoList />
    </>
   ) 
   
}

function Products() {
   return <h1 className='bg-secondary p-3'>Products</h1>;
}

function About() {
   return <h1 className='bg-success p-3'>About</h1>;
}

function NotFound() {
   return <h1 className='bg-danger p-5'>Not Found</h1>;
}



function App() {
   return (
      <BrowserRouter>
      <NavBar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/products" element={<Products />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
   </BrowserRouter> 
   );
}

export default App;