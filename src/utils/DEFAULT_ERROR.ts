import RESPONSE_CODES_AND_MESSAGES from './RESPONSE_CODES_AND_MESSAGES';

const DEFAULT_ERROR = {
  errorDescription: 'Internal server error',
  type: 'globalError',
  errorUserTitle: '',
  errorUserMsg: RESPONSE_CODES_AND_MESSAGES.INTERNAL_SERVER_ERROR.message,
  httpCode: RESPONSE_CODES_AND_MESSAGES.INTERNAL_SERVER_ERROR.code,
};

export default DEFAULT_ERROR;
