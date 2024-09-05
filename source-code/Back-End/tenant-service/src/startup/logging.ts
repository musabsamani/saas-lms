import winston from "winston";

export const logging = () => {
  const infoFile = new winston.transports.File({
    filename: "logfile.log",
    format: winston.format.combine(winston.format.prettyPrint()),
  });
  const exceptionsFile = new winston.transports.File({
    filename: "exceptions.log",
    format: winston.format.combine(winston.format.prettyPrint()),
  });
  const infoconsole = new winston.transports.Console({
    format: winston.format.combine(winston.format.simple()),
  });
  const exceptionsConsole = new winston.transports.Console({
    format: winston.format.combine(winston.format.prettyPrint()),
  });
  winston.add(infoFile);
  winston.add(infoconsole);
  winston.exceptions.handle(exceptionsConsole, exceptionsFile);
};
