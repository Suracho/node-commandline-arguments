const fs = require('fs')
const chalk=require('chalk')
const getNotes = function (){
    
}
const addNotes = (title ,body)=>{
    const notes= loadNotes()
    const duplicateNotes = notes.filter((note)=> note.title === title)
    if(duplicateNotes.length===0){
    notes.push({
        title : title,
        body : body
    })
    saveNotes(notes)
    console.log("note added")
} else{
    console.log("this note already exists")
}

}
const saveNotes = (notes)=> fs.writeFileSync('notes.json',JSON.stringify(notes))

const loadNotes = ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    } catch (error) {
        return []
    }
}
const removeNotes =  (title)=> {
    
    const notes = loadNotes()
    const removed_note_array = notes.filter((note)=> note.title!==title)
    if(removed_note_array.length===notes.length){
        console.log(chalk.red.inverse("No such node found"))
    }
    else{
        saveNotes(removed_note_array)
        console.log(chalk.green.inverse("Note removed sucessfully"))
    }
    saveNotes(removed_note_array)
}

module.exports = {
    addNotes: addNotes,
    getNotes : getNotes,
    removeNotes : removeNotes
}
