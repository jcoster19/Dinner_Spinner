# Dinner Spinner
Have you ever been lost on where to go out to eat?

## About Dinner Spinner:

Dinner Spinner is a location based app that will give users a randomized list of restaurants within your desired radius and 
restaurant prefences(rating, price, type of food, etc.). User prefences and info can be stored in a database via sequalize. 
The app utilized the Google Places API for a map display and restaurant search.


## Getting Started:

To edit Dinner Spinner for your own use, you need to get an API key from google through this link: 
https://developers.google.com/places/web-service/get-api-key


## App Structure: 

### 1. Login/ New user sign up
  - Upon opening the website a window will pop up asking existing users to sign in with email/ password combo. If it is the users first   	time on the page they will have the option to sign up with their name, email, and desired password with an extra confirm password 			box. This data is then stored in a MYSQL database using Sequelize.
				
	- This will be saved in the MYSQL database under one table named USERS, it will include a user ID, User Name, Email and Password
  
### 2. Main UI
   - The main page will focus around a spinning wheel with different types of cuisine on each sliver on the circle, there will be a 				button to initiate a spin which will run a function that accesses the function build from the Google Places API and display a list 			of randomized restaurant results. The user will have the option to set the radius of how far they want to travel, desired price 				range, if restaurant is Zagat rated and any types of cuisine they do not want to see as well as how many results they want to see 			with a max of 20. This portion is built on HTML 5 and BootStrap 4. 
	 
	 
### 3. Results Page
 - The user will also have the oppurtunity to view the results on a google map window or a list format. If the user wants they can 				also get directions via Google Maps to the restaurant or make call the restaurant if they are using the app on their mobile device. 		If the user wants more information on the restaurant they can click on each result on the map and it will show a street view of the 		location along with how busy it is at that given time, our app will also only shows restaurants that are currently open. If they 				user decides they want to go to a place on the list they will click a button that says "On my way!", this will add the restaurant to
 	the users entry on our MYSQL database so next time they use the app it won't show that restaurant in their next results. Finally if 
	the user does not like any of their results they can choose to spin again with a new list of results.
	
	- The users selection will be stored into another table in the same MYSQL database called SELECTIONS. Choosing a restaurant will create an entry in the table with the user ID, restaurant ID, and restaurant name.
	
	- When the user returns to the sit and logins, this will trigger a GET and POST request from the SELECTIONS table to display the previous restaurants visited so they know to pick a new place to go.
	


## Authors:
- Jack Coster: https://github.com/jcoster19


![cropped headshot smaller](https://cloud.githubusercontent.com/assets/23200274/26382482/7bf1713a-3ffa-11e7-809d-1ce33691ee8d.jpg) 


- Moh Kemal: https://github.com/mrkem598

- David Han: https://github.com/dhan30

- Tika Gurung: https://github.com/tika2091
	

	 	
	 
	 





