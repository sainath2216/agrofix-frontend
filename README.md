#  Build a Bulk Vegetable/Fruit Ordering Platform 

### Refer this image

![agrofix-img](https://github.com/user-attachments/assets/adc94b03-b50c-4bdb-98d1-2676b704cbd4)



### Set Up Instructions
+ npx create-react-app agrofix-frontend
+  cd agrofix-frontend
+ Download dependencies by running npm install
+ Start up the app using npm start
  - Runs the app in the development mode.\
  -  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
    The page will reload when you make changes.\
    You may also see any lint errors in the console.
+ Initialize a React app for the frontend.
+ Create an Express app for the backend.
+  database: MongoDB

### BACKEND
Backend:
ApiUrl: https://agrofix-backend.onrender.com/api

+ Create RESTful APIs for:
+ Adding a new product (POST /notes).
+ Fetching all products (GET /notes with optional query parameters for filtering).
+ Updating a product by id (PUT /notes/:id).
+ Deleting a product by id (DELETE /notes/:id).
+ Handle database operations for MongoDB
+ Use validation libraries like Joi or custom validation middleware.

### Completion Instructions

  Functionality to be added. 
  Validation:
  
  1. Browse Vegetables/Fruits
      +  Display a product catalogue with basic details such as the name and price per unit.
      +  Nostock tracking is required.
  2. Place Orders
      + Allow buyers to request bulk orders by specifying the vegetable/fruit, quantity,and delivery details (name, contact information, delivery address).
      + Savetheorder in the database with a unique identifier
  3. Order Tracking
      +  Enable buyers to check the status of their placed orders, which should update as:
         - Pending: Order has been received.
         - InProgress: Order is being processed for delivery.
         - Delivered: Order has been delivered successfully.



### Styling: 
   1. Basic styling using plain CSS
   2. Ensure responsiveness. 

 ### Implementation Files
   + src/components/ProductCatalog/index.js
   + src/components/ProductCatalo/index.css
   + src/components/OrderForm./index.js
   + src/components/OrderForm/index.css
   + src/components/OrderTracking/index.css
   + src/components/OrderTracking/index.js
   + src/components/AdminDashboard/index.css
   + src/components/AdminDashboard/index.js
   + src/app.js
