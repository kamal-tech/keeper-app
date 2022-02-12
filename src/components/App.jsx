import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Note from "./Note"
import AddNote from "../notes"



function App(){ 
    const [newPost, setNewPost] = React.useState([{
        title: "Demo Title",
        description: "Demo description is put here how"
    }])

    function deleteItem(key){
        setNewPost(prevValue=>{
            return prevValue.filter((item,index)=>{
                return index !== key;
            })
        })
    }
    return <div>
        <Header />
        <AddNote 
            setNewPost = {setNewPost}
            newPost = {newPost}
            rows = "3"
        />
        {newPost.map((notes,index) => (
        <Note 
            key = {index}
            index = {index}
            title = {notes.title}
            content = {notes.description}
            deleteItem = {deleteItem}
        />
        ))}
        <Footer />
    </div>
}

export default App;