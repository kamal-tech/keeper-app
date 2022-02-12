import React from "react"
import Zoom from '@mui/material/Zoom'
import AddIcon from '@mui/icons-material/Add'

function AddNote(props){
  const [post, setPost] = React.useState({
      title:"",
      description:""
  })

  const [boolVal, setBoolVal] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("Add a Note...")
 
  function handleChange(event){
      const {name, value} = event.target;
      setPost(prevValue =>{
          return {
              ...prevValue,
              [name]: value
          }
      })
  }

  function addItem(){
    props.setNewPost(prevValue=>{
      return [...prevValue, post]
    })
    setPost(()=>{
      return {
        title: "",
        description: ""
      }
    })
  }
  function handleClick(){
    setBoolVal(true)
    setInputValue("Title")
  }
  
  return (
    <div className="makeItCenter">
          <div className="container-form">
                  <input className="inputTitle" onClick={handleClick} onChange={handleChange} value={post.title} type="text" placeholder={inputValue} name="title"></input>
                  {boolVal && <textarea onChange={handleChange} value={post.description} rows={props.rows} placeholder="Description" name="description"></textarea>}
                  <Zoom in={boolVal}><button className="addButton" onClick={addItem}> <AddIcon className="IconColor" /> </button></Zoom>
          </div>
    </div>
      )
  }

    
export default AddNote