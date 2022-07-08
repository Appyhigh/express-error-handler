# express-error-handler
  

## Installation 


```bash
$ npm install @appyhigh/express-error-handling --save
```

  
## Use

[Check here for sample application](https://www.npmjs.com/package/express)

## Methods

### expressErrorHandler(options: Object) => (error, request, response, next)

This is a function which will work as a middleware for your express app so that your errors will response with an HTTP response.

You have to pass options objects as parameters (*options is **optional***).

**Example**

```js
const express = require('express');
const { expressErrorHandler } = require('@appyhigh/express-error-handling');

const app = express();

app.use(expressErrorHandler({
   environment : 'development',
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

## License

[MIT](LICENSE)