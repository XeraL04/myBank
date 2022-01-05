
import './App.css'
import Service from './components/Service'
import { useState, useReducer } from 'react'




function App() {
  const initialState ={ solde:100}
  const [value, setValue] = useState(0)

const reducer =(state, action)=>{
  switch (action.type){ 
    case'rechargeCompt':
   return {solde:state.solde +parseInt(value)};
  case 'virement':
   return {solde:state.solde +parseInt(value)};
  case 'rechargeTel':
   return {solde:state.solde - parseInt(value)};
  default:
   throw new Error();
  }  
}
 const [state, dispatch] = useReducer(reducer, initialState)

   const demande=(value)=>{
    setValue(value)
   }
   
  return (
    <div className="App">
      <h1>Bienvenue 3adna </h1>
      <h4>votre solde esrt:{state.solde} $</h4>
      <h2>Nos sercives</h2>
      <div className='services'>
        <Service title="recharger votre compte" sendValue={demande} calculate={()=>dispatch({type:"rechargeCompt"})} />
        <Service title="virement" sendValue={demande} calculate={()=>dispatch({type:"rechargeTel"})} />
        <Service title="recharger telephone" sendValue={demande} calculate={()=>dispatch({type:"virement"})} />
      </div>
    </div>
  )
}

export default App
