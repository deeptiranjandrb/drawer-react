import React,{useState} from 'react'
import Drawer from './Drawer';
function Input() {
    const [position, setPosition] = useState('');
    const [display, setDisplay] = useState(false);
    const changeHandler = (e) => {
        setPosition(e.target.value);
        setDisplay(false);
    }
  return (
    <div>
        <Drawer position = {position} display={display} />
        <div>
            <form>
                <label>
                <input type="radio" value="top"  name="drawerSelector" onChange={(e) => changeHandler(e)}/>
                Top
                </label>
                <label>
                <input type="radio" value="right" name="drawerSelector" onChange={(e) => changeHandler(e)}/>
                Right
                </label>
                <label>
                <input type="radio" value="left" name="drawerSelector" onChange={(e) => changeHandler(e)}/>
                Left
                </label>
                <label>
                <input type="radio" value="bottom" name="drawerSelector" onChange={(e) => changeHandler(e)} />
                Bottom
                </label>
            </form>
        </div>
        <button onClick={() => setDisplay(true)}>Open</button>
    </div>
  )
}

export default Input