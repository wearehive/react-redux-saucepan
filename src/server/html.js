// @flow
// css should be handled by front-endwebpack because style-loader needs window obj
// flow-disable-next-line
import '../../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
// flow-disable-next-line
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import { ASSETS_PATH, APP_NAME } from '../../config';

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
      <link rel="stylesheet" type="text/css" href="${ASSETS_PATH}/app.css" />
      </head>
    <body>
        <div id="app">${appHtml || ''}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(plainPartialState)}
        </script>
        <script src="${ASSETS_PATH}/app.js"></script>
      </body>
    </html>`;
}
