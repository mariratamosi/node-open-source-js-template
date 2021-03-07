## External js library

With private repository in git, by publishing to NPM, we will be able to use the js library in web browser and in node js project.

### How to create

1. run `npm init` in project directory

   It will ask for project name and other info. Respond accordingly.

2. Add below dependencies in _package.json_.

```javascript
"dependencies": {
		"@babel/polyfill": "7.12.1"
	  },
	  "devDependencies": {
		"@babel/cli": "7.12.10",
		"@babel/core": "7.12.10",
		"@babel/plugin-proposal-class-properties": "7.12.1",
		"@babel/preset-env": "7.12.11",
		"@babel/register": "7.12.10",
		"babelify": "10.0.0",
		"browserify": "17.0.0",
		"chai": "4.2.0",
		"gulp": "^4.0.0",
		"gulp-babel": "8.0.0",
		"gulp-concat": "2.6.1",
		"gulp-mocha": "7.0.2",
		"gulp-plumber": "^1.2.1",
		"gulp-sourcemaps": "3.0.0",
		"mocha": "8.2.1",
		"vinyl-source-stream": "2.0.0"
	  }
```

3. Run `npm install`
4. Run `npm install -g gulp`

   We will use gulp as our task runner, so it needs to be installed globally.

5. Add the src - `main` and `test`.
6. Add _gulpfile.js_ - write the **test - build - browserify scripts**.
7. Run `gulp`
   Output will be in the directory defined in `gulpfile.js`

### Add GIT

---

```
git init
git remote add origin origin-url
```

## ###Build and publish

```
gulp
git add .
git commit -m "test added"
git tag "0.1.3"
git push origin master
git push --tags
npm publish
```

### USAGE

`https://www.unpkg.com/pckgname@version/path-to-output-dir`

### End

```

```
