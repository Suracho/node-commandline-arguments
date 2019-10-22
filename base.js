const chalk = require('chalk')
const yargs = require('yargs')
const notes= require('./notes.js')
yargs.command({
    command:'add',
    describe:'adds a note',
    builder:{
                title:{
                        describe:'adds a title',
                        demandOption: true,
                        type:'string'
                },
                body: {
                    describe:"adds a body",
                    demandOption: true,
                    type:'string'
                }

    },
    handler(argv) {
         notes.addNotes(argv.title,argv.body)
        }
})
yargs.command({
    command : 'remove',
    describe : 'removes title',
    builder : {
        title : {
            describe : "removes the object with title provided",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})
yargs.parse()