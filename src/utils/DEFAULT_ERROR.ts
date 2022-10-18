import ERROR_CODES_AND_MESSAGES from './ERROR_CODES_AND_MESSAGES';

const DEFAULT_ERROR = {
  errorDescription: 'Internal server error',
  type: 'globalError',
  errorUserTitle: '',
  errorUserMsg: ERROR_CODES_AND_MESSAGES.INTERNAL_SERVER_ERROR.message,
  httpCode: ERROR_CODES_AND_MESSAGES.INTERNAL_SERVER_ERROR.code,
};

export default DEFAULT_ERROR;
