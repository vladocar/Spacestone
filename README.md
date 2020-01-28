<h1 align="center"> Spacestone </h1>

<p align="center"> CLI for tesseract.js </p>

Tesseract is Open Source Optical character recognition (OCR) Engine.

<hr/>

<p>Tool based on <a href="https://github.com/naptha/tesseract.js">tesseract.js</a>. </p>

<p> Spacestone CLI takes images and converts them into .PDF text and .txt file.</p>

<h4>Installation </h4>

```shell
npm i -g spacestone
```
<p>You can use  spacestone like this:</p>

```shell
spacestone  --url https://www.example.com/someimage.png
```
or locally:

```shell
spacestone -u /../../SomeImage.png -l ita
```
<p>
Parameters:

--url, -u Url or local directory  
--lang, -l language  
-h help

<p>
<p><a href="https://github.com/tesseract-ocr/tesseract/wiki/Data-Files#data-files-for-version-400-november-29-2016">List of all languages.</a></p>


<h3>License</h3>

This project is licensed under the MIT License
