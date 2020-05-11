# TABConf 2020

## Dependencies

- NodeJS
- Gulp
- Bootstrap
- FontAwesome
- Etc.

## Instructions

### Initial Setup

1. Clone this repository
2. `cd` into the repo.
3. Run `npm install`

### Local Development

1. Edit the files in the `/src` directory.
2. Run `gulp watch`
    1. This will watch for changes you make in `/src`
    2. It will compile everything to `/dist`
    3. It will open BrowserSync in your default browser and refresh everytime you make changes

### Building for Deployment

1. Run `gulp` and deploy the contents of the `/dist` folder it creates.
2. Or, you can use the same `/dist` folder that `gulp watch` creates.

### update gh-pages branch
1. `git subtree push --prefix dist origin gh-pages`
