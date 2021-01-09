# PDFMerger-Electron-GUI [WIP]
A minimal GUI to merge PDF files together into a single PDF file.

---

## Screenshot
![PDFMerger Electron GUI](https://github.com/itsDevKay/PDFMerger-Electron-GUI/blob/main/PDFMergerElectronGUI.png)

## Why I Build This
Part of my work in my day job requires me to print paperwork for our customers, sometimes for one customer this could be up to 80 papers. We have more than 1 customer. The program that we use to get this paper work takes an between 8-12 seconds to start printing, during which the program is in a state of limbo until it's done. If we assume the average is 10 seconds, then thats 800 seconds. That's 13.3 minutes of waiting.

I had started saving the files instead of immediately printing them. This only took 200-500 milliseconds to do. Then, using Adobe Acrobat Reader, I was able to print 15 pdf files at a time. Though this increased efficiency, it still took too long to do as it would start, stop repeat for each job and required me to print the next set after the first 15 were done. This was a good process but still not efficient enough.

After getting a new PC at work, I learned from the IT department that my employers were no longer going to use Adobe Acrobat Reader. So I had to say goodbye to Acrobat and revert to the slower process unless, I want to pay a subscription for Acrobat. I don't.

So, I developed a simple Electron application that would allow me to select multiple pdf files with no limit and then combine those files into a single PDF file of which I could then print all files with a click of a single button. To me, thats glorious.

This application makes use of [PDF Merger JS](https://github.com/nbesli/pdf-merger-js) who's only dependency is [PDF JS](https://www.npmjs.com/package/pdfjs)

## Limitations
This project is still in development stages, and I have only tested simple PDFs. There is an issue when trying to print PDF files that have headers. As far as footers, I have not tested that yet.

## Build From Source
You're going to need to make sure you have installed [NodeJS](https://nodejs.org/en/download/). This comes prepackaged with NPM which you can check your version using these commands:  

`node -v`  
and  
`npm -v`  

First clone the repository.  
`git clone https://github.com/itsDevKay/PDFMerger-Electron-GUI.git`  

cd into the directory with: `cd PDFMerger-Electron-GUI`  

Install the node modules using [npm](https://www.npmjs.com/).  
`npm install`  

Once that is complete, you can run the application using `npm start`.

However, if you want to build it into a desktop application you'll need to first install [Electron Builder](https://www.electron.build/).  
`yarn add electron-builder --dev`  

You can also use: `npm install electron-builder --dev` although, the documentation recommends you use [Yarn](https://yarnpkg.com/).

Once that is complete, you can build for your OS using one of the commands below:  

`electron-builder build --mac`  

`electron-builder build --win --ia32`

`electron-builder build --linux`
