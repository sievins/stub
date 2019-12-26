# StuB
> Study the Bible

An SPA for printing out Bible passages. The text has double line spacing and the option for extra large margins, providing space for annotating the text with your notes. 

## Development

### Prerequisites

You need an API key for accessing the ESV's REST services. You can obtain one from https://api.esv.org/account/create-application/.

Create an `.env.local` file at the projects root and add a key called `REACT_APP_ESV_AUTHORISATION_TOKEN`, whose value is the API key.

### Scripts

* `yarn run start`: Runs the webpack-dev-server.
* `yarn run test`: Runs the tests.
* `yarn run build`: Builds the static asset.
* `yarn run deploy`: Deploys the static asset.
