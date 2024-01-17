import { format, createLogger, transports, Logger } from 'winston';

const { printf, timestamp, combine, label, errors } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
	if (stack) {
		return `${timestamp} ${level}: ${message}\n${stack}`;
	} else {
		return `${timestamp} ${level}: ${message}`;
	}
});

const logger: Logger = createLogger({
	level: 'info',
	format: combine(
		label({ label: 'logger' }),
		timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		errors({ stack: true }),
		logFormat,
	),
	transports: [
		new transports.Console(),
		new transports.File({ dirname: 'logs', filename: 'logs.log' }),
	],
});

export default logger;
