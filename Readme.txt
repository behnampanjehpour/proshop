#Proshop
proshop is an ecommerce web application for showing different features that I can add to an ecommerce web application, it has several features such as active payment option with papayl so as a client you feel it is a real ecommerce web app, it also has sign in and sign up page, moreover the admin have different access when he is logged in. I used Node and React for creating server side and client side. The database is cloud base MongoDB.

#Installation
After cloning from github you should run:
npm install
then it it is going to install every dependency on this project then run:
npm start
it starts both client and server side based on the scripts that I add to package.json

#Usage
After running you will see the home page, every cilent even if they are not registered can see the whole homepage along with products and the comments for each of them, unregistered clients are not be able to see the whole menu except sign in and cart, after going to sign in page if they have log in credentiola they can log in if not they can click on regoster link and go to sign up page, +we use cookie on this page so if the client logged in and left the website he will be able to communicate the webiste without inserting his login credentials. After logging in the client is able to see his name appears on top and also he can see his profile, at the profile page he can track his previous purchases and also edit or add his shipping address. When a client want to buy a product simply click on it, it will show the single page for procust with status of it in the warehouse and also short description and price, he also be able to see the reviews and rates from previous buyers and also he can add his own comment for t hat product, after selecting the product it leads him to the cart page where the client can set the number of pruduct that he wants to buy then click on checkout, if he set his address at the profile page the address will appear here if not he has to add them at the shipping page then move forward to payment page to select the preference payment method, finlly he can see the review page and click on place order, after clicking on it he is able to see the payments link and a summary of his purchase if he wants to pay in the future he can do that, at this page the client can see if he paied or delivered or not, now if client checks his profile page he will find his orders and the details about it.
Admin has one more than clients on his menu and he can track all orders and check if they are paied or not, moreover he can set them as a devlivered item. He also can manage the comments and users he can add products using product page. He has all power of managing the website.
At the home page I set search box with use effect hooks so as soon as the clients type something it fiers and finds related items. At the slider section it will show high rated items in order and the client can select them from the slider. 

#Author
Behnam Panjehpour
https://www.iambehnam.com

#support
if you need help just send me an email:
behnam.panjehpour@gmail.com

#Licence
It is a sample ecommerce web app you need to get permission if you want to use the same design.