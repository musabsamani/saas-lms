import winston from "winston";

/**
 * Configures logging for the Express application using Winston.
 *
 * This function sets up two log files, one for general information and one for exceptions.
 *
 * It also sets up two transports for logging to the console, one for general information and one for exceptions.
 *
 * The function then adds the transports to the Winston logger and sets up exception handling.
 */
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
