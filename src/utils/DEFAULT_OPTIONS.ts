import DATABASES from './DATABASES';
import ENVIRONMENTS from './ENVIRONMENTS';

interface Options {
  environment?: string;
  errorLogs?: boolean;
  trace?: boolean;
  errorDescription?: boolean;
  errorOrigin?: boolean;
  appName: string;
  database: DATABASES;
  mongoURL?: string;
  dbName: string;
}

const defaultOptions: Options = {
  environment: ENVIRONMENTS.DEV,
  errorLogs: false,
  trace: true,
  errorDescription: true,
  errorOrigin: true,
  appName: 'errorApp',
  database: DATABASES.MONGODB,
  mongoURL: '',
  dbName: 'errorApp',
};

export { Options };
export default defaultOptions;
