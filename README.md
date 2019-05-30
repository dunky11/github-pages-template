# github-pages-template
Template which i use to build fast github pages using node.js + react + material-ui

### Installation
1. Clone this repository
```console
git clone https://github.com/dunky11/github-pages-template/
```
2. Install node.js
```console
sudo apt install nodejs npm
```
3. Install dependencies
```console
cd github-pages-template
npm install
```
4. Start local server
```console
npm start
```
### Usage
You can start editing files now, changes will automatically refresh your webpage. Inside config.js you can set basic configuration. Before you deploy your project to github-pages be sure to edit your package.json so "name" and "homepage" matches your projects.

### Deployment
1. Compile your project
```console
npm run build
```
2. Push your compiled project to the gh-pages branch
```console
npm run deploy
```
