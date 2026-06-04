import fs from 'fs';
import * as XLSX from 'xlsx';
import { parse } from 'csv-parse/sync';

export class ReadFiles {

    readJsonFile(filePath: string) {
        return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }

    readCsvFile(filePath: string) {
        return parse(fs.readFileSync(filePath, 'utf-8'), { columns: true, skip_empty_lines: true });
    }

    readExcelFile(filePath: string) {
        const workbook = XLSX.readFile(filePath);// Read workbook
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet);
    }




}





