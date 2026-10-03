const { PDFParse, VerbosityLevel } = require('pdf-parse');
const fs = require('fs');

async function main() {
  const buf = fs.readFileSync('Ankit Kumar_Resume (1).pdf');
  const parser = new PDFParse({ verbosity: VerbosityLevel ? VerbosityLevel.ERRORS : -1 });
  await parser.load({ data: buf });
  const info = await parser.getInfo();
  console.log('Pages:', info.numPages);
  let fullText = '';
  for (let i = 1; i <= info.numPages; i++) {
    const pageText = await parser.getPageText(i);
    fullText += `\n--- PAGE ${i} ---\n` + pageText;
  }
  console.log(fullText);
}

main().catch(e => console.error(e.message, e.stack));
