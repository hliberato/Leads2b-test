export default {

  // basic mock
  'GET */api/login' (pathMatch, query, request, passThrough) {
    // before respond, you can check the path and query parameters with `pathMatch` & `query`
    // powered by 'url-pattern' & 'qs'
    // https://www.npmjs.com/package/url-pattern
    // https://www.npmjs.com/package/qs
    // to pass through this mock, call the 4th parameter as a function, the return value will be ignored
    passThrough()

    const body = { /* whatever */ }
    debugger
    return {
      body: body,
      status: 200,
      statusText: 'OK',
      headers: { /* headers */ },
      delay: 500 // millisecond
    }
  }

  // shorthand mock
  // ['PUT */path/to/resource']: 200, // respond with only status code
  // ['POST */path/to/resource']: { /*whatever*/ } // respond with only body, status code = 200

}
