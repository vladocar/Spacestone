#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const { createWorker } = require('tesseract.js');
const program = require('commander');

program
    .option('-u, --url, [url]', 'Url or local directory')
    .option('-l, --lang, [lang]', 'language')
    .parse(process.argv);

const image = program.url;
const timestamp = new Date().getTime();

console.log(`Processing ${image}`);

(async () => {
  const worker = createWorker();
  await worker.load();
  if (program.lang) {
    await worker.loadLanguage(program.lang);
    await worker.initialize(program.lang);
  } else {
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
  }
  const { data: { text } } = await worker.recognize(image);
  console.log(text);
  const { data } = await worker.getPDF('Tesseract OCR Result');
  fs.writeFileSync(`result-ocr-${timestamp}.pdf`, Buffer.from(data));
  fs.writeFileSync(`result-ocr-${timestamp}.txt`, Buffer.from(text));
  console.log('PDF and txt generated!');
  await worker.terminate();
})();
