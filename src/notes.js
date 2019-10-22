const fs = require('fs')
const chalk=require('chalk')
const getNotes = function (){
    
}
const addNotes = (title ,body)=>{
    const notes= loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)
    if(duplicateNote){
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
const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.inverse("Your Notes"))
    notes.forEach(note => {
        console.log(chalk.blue.inverse(note.title))
    });
}
const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse("Title has been loaded!"))
        console.log("title is : " + chalk.yellow.inverse(note.title) + "body is : " + chalk.yellow.inverse(note.body))
    }
    else {
        console.log(chalk.inverse.red("NO SUCH NOTE FOUND"))
    }
}


module.exports = {
    addNotes: addNotes,
    getNotes : getNotes,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}
