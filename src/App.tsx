
import { Button } from '@ui/Button'
import { Textbox } from '@ui/Textbox'
import { Radio } from '@ui/Radio'
import {Checkbox} from '@ui/Checkbox'
import { Select } from '@ui/Select'

function App() {

  const chg = (e:any) => {
    console.log(e);
    
  }

  return (
    <>
      <Button label='Register' type='button' />
      <Radio name='gender' id='male' value={'Male'} label='Male'/>
      <Checkbox name='gender' id='male' value={'checkbox'} label='checkbox'/>

      {/* <input type='text' placeholder='name'/> */}
      <Textbox placeholder='email'/>
      
      <Select selectList={[{label:'Volvo', value:'Volvo'},{label:'BMW', value:'BMW'}]} onChange={chg} value={'BMW'}/>


    </>
  )
}

export default App
