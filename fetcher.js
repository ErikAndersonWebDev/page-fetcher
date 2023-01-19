// should take in two command line arguements
// 1 - a URL
// 2 - a local file path
const args = process.argv.slice(2)
const IP = args[0];
const newFile = args[1];
const net = require('net');
const fs = require("fs")


const request = require('request');
request(`${IP}`, (error, response, body) => {
  if (error) {
    console.log(error)
  }
  if (response && response.statusCode === 200) {
    fs.writeFile(`${newFile}`, body, err => {
      if (err) {
        console.error(err);
      } else {
        console.log("File Successfully Written!")
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${newFile}`)
  })
};
});

console.log("end of sync")



// download the resource at the URL to the local path on our machine

// once completed, it should print out a message like:
// "Downloaded and saved 1235 byes to ./index.html."


// // // > node fetcher.js http://www.example.edu/ ./index.html
// // // Downloaded and saved 3261 bytes to ./index.html

// two Async operations:
// 1 - need to make http request and wait for response
// 2 - after http request is complete, take the data received and write it to a file in the local file system

// how to write a file in node.js:

// // // const fs = require('fs');

// // // const content = 'Some content!';


