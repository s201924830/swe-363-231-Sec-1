const fs = require('fs'); const path = require('path');

const [sourceDir, targetDir] = process.argv.slice(2);

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Error reading the source directory:', err);
    return;}

  const filteredFiles = files.filter(file => file.endsWith('.txt') || file.endsWith('.jpg') || file.endsWith('.png'));
  filteredFiles.forEach(file => {
    const sourceFilePath = path.join(sourceDir, file);
    const targetFilePath = path.join(targetDir, file);

    fs.copyFile(sourceFilePath, targetFilePath, (err) => {
      if (err) { console.error(`Error copying file ${file}:`, err);} 
      else { console.log(`File ${file} copied to target directory.`);}
    });
  });
});