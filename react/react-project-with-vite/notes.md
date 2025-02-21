# creating a project in React

- First when react started we are using create-react-app
- cmd, npx create-react-app project_name
- so nowerdays, React documentation is asking us to use nextjs.
- since nextjs is a framwork and in future, if vercal company leaves, then it will be problamatic
- to work on nextjs, we need to be good at react.
- other than nextjs, we have a tool called as vite, which is currently in booming.
- its very easy to create using vite, there are some commands given at documentation.

# project setup given by vite.

- node_modules
- public
- src
- index.html
- package.json
- it tells the metadata about project ( exta info) about project.
- name: name of the project
- version: version of the project
- type: module or commonJS.
- we use es6 modules 99.99% of the time when working with react.
- moduling means, we divided our code into small and reusable modules.
- scripts: some common commands to run projects
- when this project is created, it comes up with some algorithm.
- we can also use testing scripts also.
- to run any script, we use npm run name_specified.
- its a json (javascript object notation) fie, looks like javascript oject
- dependencies - core modules which are required during deployment.
- devDependencies - dependencies are only for dev purpose, not for production use or for deployment.
- we should not be deploying all these dependencies, as it will make the application heavy.
- ^ and ~
- ^, for minor version installation
- ~, for major version installation
- package-lock.json
- package-lock.json file contains the exact version of dependencies installed and also the info related to other dependencies that u r dependent on
- vite.config.js
