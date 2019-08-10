const request = require('request');

const { createWriteStream } = require('fs');

const url = 'http://tesseract.projectnaptha.com/img/eng_bw.png'
const filename = 'pic.png'

request(url).pipe(createWriteStream(filename)).on('close', () => {
	console.log(url,'saved to', filename)
})