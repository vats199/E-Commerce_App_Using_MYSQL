# E-Commerce_App_Using_MYSQL

SetUp instructions :-

-> First of all install Node and npm on your system.
-> In terminal or cmd,create your own node_package using command 'npm init'. ('Visual Studio Code' Application is recommended to run your code)
-> After creating package you have to install some node libraries listed in packages.txt.
-> After installing the packages you have to add 1 command in your 'package.json' file :

                 add "start": "nodemon app.js" command in an object named "scripts" 
                        
                        
-> After that install mySQL workbench and mySQL community server.
-> Then in the default localhost connection you have to create Schema which will be used for storing your webApp's data and then do changes in the code given below:
            
            Enter your schema name,username and password in this file --> 'util/database.js' 
