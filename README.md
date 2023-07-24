# fastify-api

An attempt at writing Node APIs with Fastify

### Running the application

use `yarn install` or `npm i` to install all dependencies \
use `yarn dev` or `npm run dev` to run the project

### Swagger

navigate to `http://localhost:3000/docs` for swagger doco

### Testing the APIs

use `REST Client` extension in VSCode & use the `src/tests/tests.http` file to "Send Requests"

### Authentication added to books api

Books APIs cannot be called without a valid auth token. \
Use the `login` API to get an access token (expires in 60 seconds) to call `books` APIs. \
\
This can be done with swagger-ui or using the `tests.http` file (REST Client in VSCode).

### Security-related article

https://techblog.topdesk.com/security/cookie-security/
https://www.cnblogs.com/davidwang456/p/6550413.html
https://lazypandatech.com/blog/Miscellaneous/62/Where-to-keep-application-secure-data-in-Cookie-or-HTML5-Web-storage/
https://dev.to/cotter/localstorage-vs-cookies-all-you-need-to-know-about-storing-jwt-tokens-securely-in-the-front-end-15id
https://medium.com/@pramonowang/storing-your-jwts-in-html-web-storage-is-maybe-a-bad-idea-72fb0a0c3a19
https://angular.io/guide/http-security-xsrf-protection
https://owasp.org/www-community/attacks/Cross_Site_Tracing

https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_Steps/Website_security

https://www.mobindustry.net/blog/11-web-application-security-best-practices-you-need-to-know
https://www.commonplaces.com/blog/8-simple-ways-to-improve-your-website-security
https://www.essentialtech.com.au/blog/network-security-why-you-should-care-about-it

### Authentication

https://devshibhit.medium.com/basic-client-side-authentication-in-react-a95a0d51ec48
stackexchange: best-place-to-store-authentication-tokens-client-side
https://stackoverflow.com/questions/27067251/where-to-store-jwt-in-browser-how-to-protect-against-csrf
https://blog.openreplay.com/using-jwt-for-authentication-in-react
https://www.freecodecamp.org/news/authenticate-users-node-app/
https://blog.logrocket.com/jwt-authentication-best-practices/

CORS:
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/

cookie-based:
https://www.section.io/engineering-education/cookie-vs-token-authentication/
https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
