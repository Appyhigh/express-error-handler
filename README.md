# express-error-handler
  

## Installation 


```bash
$ npm install @appyhigh/express-error-handler --save
```

  
## Use

[Check here for sample application](https://github.com/Appyhigh/express-error-handling/tree/main/testing)

## Methods

### expressErrorHandler(options: Object) => (error, request, response, next)

This is a function which will work as a middleware for your express app so that your errors will response with an HTTP response.
if you will pass database URL then your errors will be saved in database for future analytics.

You have to pass options objects as parameters (*options is **optional***).

**Example**

```js
const express = require('express');
const { expressErrorHandler } = require('@appyhigh/express-error-handler');

const app = express();

app.use(expressErrorHandler({
   environment : 'development',
   dbUrl: 'mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true',
   dbName: 'test-1',
   appName: 'testing-1',
   errorLogs : false,
   trace : true,
   errorDescription : true,
   errorOrigin : true
}));
```

## Options

  
| Option | Type | Default | Description  |
| ------ |------|---------| ------------ |
| environment | String | `development`| it can be either `development` or `production`. |
| trace| Boolean | `true` | If `true` the trace is attached to response. |
| errorLogs | Boolean | `false` | If `true` all errors are printed via `console.error`. |
| errorDescription | Boolean | `true` | If `true` then error message for developer will be attached to response. |
| errorOrigin | Boolean | `true` | If `true` then error origin place in your code will be attached to response. |
| dbUrl | String | `` | If database string given then errors will be save in database. |
| dbName | String | `errorApp` | Save the errors in given database name. |
| appName | String | `errorApp` | This property will help to group the errors application wise in database collection. |


## Example

5xx error  `trace: true`:

```
{
    "statusCode": 404,
    "error": {
        "stack": "Error\n at new AppError (/home/akumar/instore-dev/insta-downloader-backend/lib/errorClasses/appError.js:11:5)\n    at next (/home/akumar/instore-dev/insta-downloader-backend/node_modules/express/lib/router/index.js:260:14)",
        "errorDescription": "Error info for developer",
        "type": "Error_origin",
        "errorUserTitle": "Error title for user",
        "errorUserMsg": "Error message for user"
    }
}
```


### Definition of a "Error"

  
The error could contain the following fields:

|  Error Key  |  Purpose  |
| --------- | -------------------------------------------------------------------- |
| stack | Trace including data for dubug such as file, paths. |
| errorDescription | Error message for developer debug purpose. |
| type | Error origin means in which module error has occured. |
| errorUserTitle | Error title for user popup. |
| errorUserMsg | Error message for user popup. |
| statusCode | HTTP status code for response. Default value: `500` (Internal Server Error). |

## HTTP Code


| Name | Type | value | 
| ------ |------| -----|
| ACCEPTED | Number | 202 |
| BAD_GATEWAY | Number | 502 |
| BAD_REQUEST | Number | 400 |
| CONFLICT | Number | 409 |
| CONTINUE | Number | 100 |
| CREATED | Number | 201 |
| EXPECTATION_FAILED | Number | 417 |
| FAILED_DEPENDENCY | Number | 424 |
| FORBIDDEN | Number | 403 |
| GATEWAY_TIMEOUT | Number | 504 |
| GONE | Number | 410 |
| HTTP_VERSION_NOT_SUPPORTED | Number | 505 |
| IM_A_TEAPOT | Number | 418 |
| INSUFFICIENT_SPACE_ON_RESOURCE | Number | 419 |
| INSUFFICIENT_STORAGE | Number | 507 |
| INTERNAL_SERVER_ERROR | Number | 500 |
| LENGTH_REQUIRED | Number | 411 |
| LOCKED | Number | 423 |
| METHOD_FAILURE | Number | 420 |
| METHOD_NOT_ALLOWED | Number | 405 |
| MOVED_PERMANENTLY | Number | 301 |
| MOVED_TEMPORARILY | Number | 302 |
| MULTI_STATUS | Number | 207 |
| MULTIPLE_CHOICES | Number | 300 |
| NETWORK_AUTHENTICATION_REQUIRED | Number | 511 |
| NO_CONTENT | Number | 204 |
| NON_AUTHORITATIVE_INFORMATION | Number | 203 |
| NOT_ACCEPTABLE | Number | 406 |
| NOT_FOUND | Number | 404 |
| NOT_IMPLEMENTED | Number | 501 |
| NOT_MODIFIED | Number | 304 |
| OK_REQUEST | Number | 200 |
| PARTIAL_CONTENT | Number | 206 |
| PAYMENT_REQUIRED | Number | 402 |
| PERMANENT_REDIRECT | Number | 308 |
| PRECONDITION_FAILED | Number | 412 |
| PRECONDITION_REQUIRED | Number | 428 |
| PROCESSING | Number | 102 |
| PROXY_AUTHENTICATION_REQUIRED | Number | 407 |
| REQUEST_HEADER_FIELDS_TOO_LARGE | Number | 431 |
| REQUEST_TIMEOUT | Number | 408 |
| REQUEST_TOO_LONG | Number | 413 |
| REQUEST_URI_TOO_LONG | Number | 414 |
| REQUESTED_RANGE_NOT_SATISFIABLE | Number | 416 |
| RESET_CONTENT | Number | 205 |
| SEE_OTHER | Number | 303 |
| SERVICE_UNAVAILABLE | Number | 503 |
| SWITCHING_PROTOCOLS | Number | 101 |
| TEMPORARY_REDIRECT | Number | 307 |
| TOO_MANY_REQUESTS | Number | 429 |
| UNAUTHORIZED | Number | 401 |
| UNPROCESSABLE_ENTITY | Number | 422 |
| UNSUPPORTED_MEDIA_TYPE | Number | 415 |
| USE_PROXY | Number | 305 |

## HTTP Code Description


| Name | Type | Description | 
| ------ |------| --------- |
| [httpCode.ACCEPTED] | String | `Accepted` |
| [httpCode.BAD_GATEWAY] | String | `Bad Gateway` |
| [httpCode.BAD_REQUEST] | String | `Bad Request` |
| [httpCode.CONFLICT] | String | `Conflict` |
| [httpCode.CONTINUE] | String | `Continue` |
| [httpCode.CREATED] | String | `Created` |
| [httpCode.EXPECTATION_FAILED] | String | `Expectation Failed` |
| [httpCode.FAILED_DEPENDENCY] | String | `Failed Dependency` |
| [httpCode.FORBIDDEN] | String | `Forbidden` |
| [httpCode.GATEWAY_TIMEOUT] | String | `Gateway Timeout` |
| [httpCode.GONE] | String | `Gone` |
| [httpCode.HTTP_VERSION_NOT_SUPPORTED] | String | `HTTP Version Not Supported` |
| [httpCode.IM_A_TEAPOT] | String | `I\'m a teapot` |
| [httpCode.INSUFFICIENT_SPACE_ON_RESOURCE] | String | `Insufficient Space on Resource` |
| [httpCode.INSUFFICIENT_STORAGE] | String | `Insufficient Storage` |
| [httpCode.INTERNAL_SERVER_ERROR] | String | `Server Error` |
| [httpCode.LENGTH_REQUIRED] | String | `Length Required` |
| [httpCode.LOCKED] | String | `Locked` |
| [httpCode.METHOD_FAILURE] | String | `Method Failure` |
| [httpCode.METHOD_NOT_ALLOWED] | String | `Method Not Allowed` |
| [httpCode.MOVED_PERMANENTLY] | String | `Moved Permanently` |
| [httpCode.MOVED_TEMPORARILY] | String | `Moved Temporarily` |
| [httpCode.MULTI_STATUS] | String | `Multi-Status` |
| [httpCode.MULTIPLE_CHOICES] | String | `Multiple Choices` |
| [httpCode.NETWORK_AUTHENTICATION_REQUIRED] | String | `Network Authentication Required` |
| [httpCode.NO_CONTENT] | String | `No Content` |
| [httpCode.NON_AUTHORITATIVE_INFORMATION] | String | `Non Authoritative Information` |
| [httpCode.NOT_ACCEPTABLE] | String | `Not Acceptable` |
| [httpCode.NOT_FOUND] | String | `Not Found` |
| [httpCode.NOT_IMPLEMENTED] | String | `Not Implemented` |
| [httpCode.NOT_MODIFIED] | String | `Not Modified` |
| [httpCode.OK_REQUEST] | String | `Ok Request` |
| [httpCode.PARTIAL_CONTENT] | String | `Partial Content` |
| [httpCode.PAYMENT_REQUIRED] | String | `Payment Required` |
| [httpCode.PERMANENT_REDIRECT] | String | `Permanent Redirect` |
| [httpCode.PRECONDITION_FAILED] | String | `Precondition Failed` |
| [httpCode.PRECONDITION_REQUIRED] | String | `Precondition Required` |
| [httpCode.PROCESSING] | String | `Processing` |
| [httpCode.PROXY_AUTHENTICATION_REQUIRED] | String | `Proxy Authentication Required` |
| [httpCode.REQUEST_HEADER_FIELDS_TOO_LARGE] | String | `Request Header Fields Too Large` |
| [httpCode.REQUEST_TIMEOUT] | String | `Request Timeout` |
| [httpCode.REQUEST_TOO_LONG] | String | `Request Entity Too Large` |
| [httpCode.REQUEST_URI_TOO_LONG] | String | `Request-URI Too Long` |
| [httpCode.REQUESTED_RANGE_NOT_SATISFIABLE] | String | `Requested Range Not Satisfiable` |
| [httpCode.RESET_CONTENT] | String | `Reset Content` |
| [httpCode.SEE_OTHER] | String | `See Other` |
| [httpCode.SERVICE_UNAVAILABLE] | String | `Service Unavailable` |
| [httpCode.SWITCHING_PROTOCOLS] | String | `Switching Protocols` |
| [httpCode.TEMPORARY_REDIRECT] | String | `Temporary Redirect` |
| [httpCode.TOO_MANY_REQUESTS] | String | `Too Many Requests` |
| [httpCode.UNAUTHORIZED] | String | `Unauthorized` |
| [httpCode.UNPROCESSABLE_ENTITY] | String | `Unprocessable Entity` |
| [httpCode.UNSUPPORTED_MEDIA_TYPE] | String | `Unsupported Media Type` |
| [httpCode.USE_PROXY] | String | `Use Proxy` |

### Example

```js
const { AppError, httpCode, httpMessage } = require('@appyhigh/express-error-handler');

const knownError = {
  errorDescription: 'Error description for developer.',
  type: 'error origin place or module name',
  errorUserTitle: 'Error title for user',
  errorUserMsg: httpMessage[httpCode.INTERNAL_SERVER_ERROR],
  httpCode: httpCode.INTERNAL_SERVER_ERROR
};

try{
    //do something....
}
catch(error){
    throw new AppError(knownError,{});
}
```

## License

[MIT](LICENSE)