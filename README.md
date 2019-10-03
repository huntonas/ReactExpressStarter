this is just a quick starting point for an Expressjs and React app using webpack to build the project.

make file .babelrc and paste the following in it:
```
{
  "presets": [
    "@babel/env",
    "@babel/preset-react"
  ]
}
```
Not sure why the .babelrc is not being picked up by git, will look into it further
cd into project root and npm install

npm run-script watch  will build the js

npm run-script start-server will start the node server on port 3006