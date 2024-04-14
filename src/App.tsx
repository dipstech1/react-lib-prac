
import { Button } from '@ui/Button'
import { Textbox } from '@ui/Textbox'
import { Radio } from '@ui/Radio'
import { Select } from '@ui/Select'

function App() {

  const chg = (e:any) => {
    console.log(e);
    
  }

  return (
    <>
      <Button label='Register' type='button' />
      <label> checkbox</label> 
      <input  type='checkbox'/>
      <Radio name='gender' id='male' value={'Male'} label='Male'/>
      {/* <input type='text' placeholder='name'/> */}
      <Textbox placeholder='email'/>
      
      <Select selectList={[{label:'Volvo', value:'Volvo'},{label:'BMW', value:'BMW'}]} onChange={chg} value={'BMW'}/>


    </>
  )
}

export default App
