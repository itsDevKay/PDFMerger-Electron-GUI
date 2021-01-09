const { dialog } = require('electron').remote
const PDFMerger = require('pdf-merger-js');
var merger = new PDFMerger();

async function mergePDF(selectedFiles) {
    selectedFiles.forEach(pdf => {
        // alert(pdf);
        merger.add(pdf);
    });
    savePath = (
        selectedFiles[0].substr(
            0, selectedFiles[0].lastIndexOf("/")
        ) + '/merged.pdf'
    );
    await merger.save(
        savePath
    );
    return savePath;
}

function openFilePicker() {
    console.log(
        dialog.showOpenDialog({
            buttonLabel: "Select PDFs",
            filters: [
                { name: 'PDFs', extensions: ['pdf'] }
            ],
            properties: ['openFile', 'multiSelections'] 
        }).then(result => {
            console.log(result.canceled) // Boolean 
            console.log(result.filePaths) // Array[]
            selectedFiles = result.filePaths;

            if (!result.canceled) {
                savedPath = mergePDF(selectedFiles);
                var completed = document.getElementById('completed');
                completed.innerText = "Completed: Saved at " + savePath;
                selectedFiles = [];
            }
        }).catch(err => {
            console.log(err);
            var error = document.getElementById('completed');
            error.innerText = err;
            selectedFiles = [];
        })
    )
}