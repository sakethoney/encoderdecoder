// Require file system access
fs = require('fs');

// Read file buffer
imgReadBuffer = fs.readFileSync('Agastya.JPG'); 

// Encode image buffer to hex
imgHexEncode = new Buffer(imgReadBuffer).toString('hex');

//wirte the encoded data to file
fs.writeFile('AgastyaEncodedFromCode.txt',imgHexEncode, (err)=> {
    if(err) throw err;
    console.log('Encoded file saved!');
})

// Decode hex
var imgHexDecode = new Buffer(imgHexEncode, 'hex');

// Save decoded file file system 
fs.writeFileSync('AgastyadecodedFromFile.jpg', imgHexDecode);
