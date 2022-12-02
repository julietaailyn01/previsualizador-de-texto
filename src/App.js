 import './App.css';
 import React,{ useState } from 'react';
import Edit from './components/Edit';
import Previewer from './components/Previewer';
import Header from "./components/Header"


function App() {

    let defaultState="inicio..."

    const [text,setText] = React.useState(defaultState)
    const [open,setOpen] = React.useState(false)

  return (
    <div className="bg-zinc-900 h-screen text-white flexjustify-center items-center">
        <Header/>
        <div className='pt-12'>
        <Edit text={text} setText={setText}/>
        <Previewer text={text} open={open}/>    
        </div>   
    </div>
  );
}

export default App;
