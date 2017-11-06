// @flow
import { JS_PATH, APP_NAME } from '../../config';
// FIXME: sort this out

export default function generateHtmlPage(appHtml: ?string, plainPartialState: any) {
  return `<html lang="en">
    <head>
      <title>${APP_NAME}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,height=device-height,
        user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0"
      />
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />

      </head>
    <body>
        <div id="app">${appHtml || ''}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(plainPartialState)}
        </script>
        <script src="${JS_PATH}/app.js"></script>
      </body>
    </html>`;
}
