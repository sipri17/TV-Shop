# TV-Shop

- in terminal, change directory into server then run "npm install"
- setup the config.json according to your own database
- create the database by running "sequelize db:create" or manually create it using sql client software such as DBeaver
- create .env file in the server folder and setup the neccessary variable based on the template.env
- run "sequelize db:migrate" to migrate the database
- run "sequelize db:seed:all" to seed all the mockup data
- run "node app.js" or "nodemon app.js" if you have nodemon installed
- change directory into client then run "npm install"
- run "npm run dev" to serve the client
- open the local link shown after you run "npm run dev", usually it's "http://localhost:5173/"