const xlsx = require('xlsx')

function loadExcelData(TCIDName) {
  let cellInStringFormat
  const workbook = xlsx.readFile(`${process.cwd()}\\RegistrationExcel.xlsx`)
  const worksheet = workbook.Sheets["NewSheet"]
  //const arrOfElements = xlsx.utils.sheet_to_json(worksheet,true);
  arrOfElements = xlsx.utils.sheet_to_json(worksheet)
  //var range = xlsx.utils.decode_range(worksheet['!ref']);
  //var rangeRow = xlsx.utils.decode_row();
  console.log("range: "+JSON.stringify(arrOfElements))
  // for (var R = range.s.r; R <= range.e.r; ++R) {
  //   var rangeRow = xlsx.utils.decode_col(worksheet["!cols"]);
  //   for (var C = range.s.c; C <= range.e.c; ++C) {
  //     var cell_address = { c: C, r: R };
  //     var cell_ref = xlsx.utils.encode_cell(cell_address);
  //     let cell = worksheet[cell_ref].v;
  //     if (cell == TCIDName) {
  //       cell_address = { c: C, r: R - 1 }
  //       var cell_ref = xlsx.utils.encode_cell(cell_address);
  //       //console.log("excact cell Name :", cell_ref)
  //       cell = worksheet[cell_ref].v;
  //        cellInStringFormat=cell.toLocaleString()
  //       console.log("exact cell Value for key "+TCIDName+" :", cellInStringFormat)
  //       break;
  //     }
  //   }
 // }
  return cellInStringFormat;
}

function excelData(strKeyValue){
    let cellInStringFormat
    const workbook = xlsx.readFile(`${process.cwd()}\\RegistrationExcel.xlsx`)
    const worksheet = workbook.Sheets["NewSheet"]
    //const arrOfElements = xlsx.utils.sheet_to_json(worksheet)
    const arrOfElements = xlsx.utils.sheet_to_json(worksheet)
          console.log("excact Row Values :", JSON.stringify(arrOfElements))
          const object1=JSON.stringify(arrOfElements);
          console.log("excact Row Values :", object1)
    // var range = xlsx.utils.decode_range(worksheet['!ref']);
    // for (var R = range.s.r; R <= range.e.r; ++R) {
    //   for (var C = range.s.c; C <= range.e.c; ++C) {
    //     var cell_address = { c: C, r: R };
    //     var cell_ref = xlsx.utils.encode_cell(cell_address);
    //     let cell = worksheet[cell_ref].v;
    //     if (cell == strKeyValue) {
    //       cell_address = { c: C, r: R - 1 }
          
    //       // cell = worksheet[cell_ref].v;
    //       //  cellInStringFormat=cell.toLocaleString()
    //       // console.log("exact cell Value for key "+strKeyValue+" :", cellInStringFormat)
    //       break;
    //     }
    //   }
   // }
    return cellInStringFormat;
}
excelData("TCID_01_VerifyExcelData")