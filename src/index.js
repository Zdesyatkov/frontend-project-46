import fs from 'fs';
import path from 'path';
import parse from './parsers.js';


const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath)
const readFile = (filepath) => fs.readFileSync(getAbsolutPath(filepath))
const getFormat = (filename) => filename.split('.')[1];

const gendiff = (file1, file2) => {
    const data1 = readFile(file1);
    const data2 = readFile(file2);
    const parsed1 = parse(data1, getFormat(file1));
    const parsed2 = parse(data2, getFormat(file2));
    const data = (`${parsed1}, ${parsed2}`);
    console.log (parsed1);
    console.log (parsed2);
  };
  
  export default gendiff;