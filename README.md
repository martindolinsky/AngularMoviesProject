# MoviesProject installation guide

## Clone repository
Firstly you need to clone this repository using `git clone https://github.com/martindolinsky/AngularMoviesProject` to your IDE <br>
Run `npm update` to update your npm repositories <br>
Run `ng update` to update your angular repositories <br>
Ensure that port `localhost 4200` is not listening to other applications <br>
Then run `ng serve` to start the angular application

## MySQL server settings
Run database [dump script](https://github.com/martindolinsky/AngularMoviesProject/blob/master/database.sql) on MySQL client <br>
Open XAMPP or any other client and change the MySQL port to: `8889` <br>
Login to database using: <br> 
Username: `root` <br>
Password: `root`


## SpringBoot server settings
Open second terminal window  and navigate to root directory of the project<br>
Run `java -jar MoviesServer.jar` to start the SpringBoot server

## Login as User
To login as User use : <br>
Login: `user` <br>
 Password: `useruser`

## Login as Administrator
To login as Administrator use : <br>
Login: `admin` <br>
 Password: `adminadmin`

### Enjoy :)
