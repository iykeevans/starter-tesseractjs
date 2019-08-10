const Tesseract = require('tesseract.js');
const filename = 'pic.png';

Tesseract.recognize(filename)
	.progress((p) => console.log('progress', p))
	.catch(err => console.log(err))
	.then(result => {
		console.log(result.text)
		process.exit(0)
	});