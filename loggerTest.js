 const winston =require("winston");
// const { level, message, timestamp } = info;
// const logger = winston.createLogger({
//     transports: [
//       new winston.transports.Console(),
//       new winston.transports.File({ filename: 'C:\\Users\\LENOVO\\OneDrive\\Desktop\\JavaScriptProgramms\\TextFileHere.txt'})
//     ]
//   });

//   logger.info('Hello World ')


const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
 new transports.Console(),
  new winston.transports.File({ filename: 'C:\\Users\\LENOVO\\OneDrive\\Desktop\\JavaScriptProgramms\\TextFileHere.txt'})
  ]
});
logger.error("Hello World")