
import { Button } from '@ui/Button'
import { Textbox } from '@ui/Textbox'
import { Radio } from '@ui/Radio'
import {Checkbox} from '@ui/Checkbox'
import { Select } from '@ui/Select'
import {Routes, Route } from 'react-router-dom'
import { Register } from './pages/register'

function App() {

  const chg = (e:any) => {
    console.log(e);
    
  }

  return (
    <>
      
      <Routes>
        <Route path="/register" element={<Register/>}/>
      </Routes>


    </>
  )
}

export default App
