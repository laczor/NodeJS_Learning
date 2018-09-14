const path = require('path');
const fs = require('fs');

//This is where the will be copied from
const copyFolder = __dirname + '/file_system_workingFiles_1';
const parsingFolder = __dirname + '/file_system_workingFiles_2';

//Array to containg filenames

let copyFileNames = [];
let parsedFileNames = [];

//Since it is async we have to nest the functions
fs.readdir(copyFolder, (err, files) => {
    files.forEach(file => {
        copyFileNames.push(file);
    });

    readyCopyFile()

});

//executed after the files in the first directory are listed
function readyCopyFile(){

    fs.readdir(parsingFolder, (err, files) => {
        files.forEach(file => {
            parsedFileNames.push(file);
        });
        merge();

    });


};
//Will copy only those files which are not in the given destination
function merge() {

    copyFileNames.filter((el)=>{
        return !parsedFileNames.includes(el)
    }).map((el)=>{
        let copyFileName = copyFolder+'/'+el;
        let parseFileName = parsingFolder+'/'+el;

        copy(copyFileName,parseFileName)

    });
}


var copy = (copyFileName, dest)=>{

    fs.copyFile(copyFileName, dest, err => {
        if (err) throw err;
        console.log('success');
    });
};