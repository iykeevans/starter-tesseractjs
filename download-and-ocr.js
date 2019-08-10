const request = require('request');
const Tesseract = require('tesseract.js');

const { createWriteStream } = require('fs');

const url = 'http://tesseract.projectnaptha.com/img/eng_bw.png'
const filename = 'pic.png'

request(url).pipe(createWriteStream(filename)).on('close', () => {
	console.log(url,'saved to', filename)
	Tesseract.recognize(filename)
	.progress((p) => console.log('progress', p))
	.catch(err => console.log(err))
	.then(result => {
		console.log(result.text)
		process.exit(0)
	});
})