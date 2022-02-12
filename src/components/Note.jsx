import React from "react";
import Delete from '@mui/icons-material/Delete'


function Note(props){
    return <div className="note">
    <h3 className="noteTitle">{props.title} <button onClick={() => {
                props.deleteItem(props.index);
              }}><Delete /></button></h3>
    <p className="noteContent">{props.content} </p>
    </div>
}

export default Note;