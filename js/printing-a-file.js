// Let’s create a simple javascript script that prints the names of all subdirectories within a given directory:

const fs = require('fs');
const path = require('path');

function findDirectories(directory) {
  // Inspect each file within the directory. Some of these "files" may actually be subdirectories.
  fs.readdirSync(directory).forEach(filename => {
    // If the current file is itself a subdirectory:
    const filePath = path.join(directory, filename);
    if (fs.statSync(filePath).isDirectory() && filename !== "." && filename !== "..") {
      // Print out the full path name:
      console.log(filePath);
    }
  });
}

// Example usage:
findDirectories('/path/to/your/directory');


const fs = require('fs');
const path = require('path');

function findDirectories(directory) {
  // Loop through first-level directory:
  fs.readdirSync(directory).forEach(filename => {
    const firstLevelDirPath = path.join(directory, filename);
    if (fs.statSync(firstLevelDirPath).isDirectory() && filename !== "." && filename !== "..") {
      console.log(firstLevelDirPath);

      // Loop through second-level subdirectory:
      fs.readdirSync(firstLevelDirPath).forEach(innerFilename => {
        const secondLevelDirPath = path.join(firstLevelDirPath, innerFilename);
        if (fs.statSync(secondLevelDirPath).isDirectory() && innerFilename !== "." && innerFilename !== "..") {
          console.log(secondLevelDirPath);
        }
      });
    }
  });
}

// Example usage:
findDirectories('/path/to/your/directory');


// using recursion 

const fs = require('fs');
const path = require('path');

function findDirectories(directory) {
  // Loop through the current directory:
  fs.readdirSync(directory).forEach(filename => {
    const currentFilePath = path.join(directory, filename);

    // Check if the current file is a directory and not the "." or ".." entry:
    if (fs.statSync(currentFilePath).isDirectory() && filename !== "." && filename !== "..") {
      console.log(currentFilePath);

      // Recursively call this function on the subdirectory:
      findDirectories(currentFilePath);
    }
  });
}

// Example usage:
findDirectories('/path/to/your/directory');
