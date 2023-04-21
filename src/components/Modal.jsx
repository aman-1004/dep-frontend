import { useState } from "react"
import "./Modal.css"

const Modal = ({children}) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    console.log("Pressed Modal Button ")
    setVisible( visible => !visible)
  }
  return (-
    <div>
      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={toggleVisible}> View Application </button>

    { visible && (<>
      <div id='modaloverlay' onClick={toggleVisible}/>
      <div id='modalcontent'>
        <button style={{float: 'right'}} onClick={toggleVisible}> X </button>
        {children} 
      </div>
      </>
    )}
    </div>
  )
}

export default Modal
