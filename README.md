# eCommerce Backend
GitHub Repo: https://github.com/jheersink8/eCommerce-backend

Deployed Site: https://drive.google.com/file/d/11MGHF-gG5b7L77zZozOaLzav2jBvHpzc/view

## Description
This tool provides the database backend for an eCommerce website. The database (called eCommerce_db) houses four tables:
-	Category (contains the high level category of each product the site sells)
-	Product (the actual product itself)
-	Tag (granular information about each product)
-	ProductTag (the through table that connects the many to many relationship of Product and Tag)

While there is no frontend for this tool, all the database functionality can be viewed through Insomnia (which is displayed in the demo video below). This tool demonstrates a working knowledge of the following tools:
-	PostgreSQL
-	Sequelize 
-	The use of .env files
-	Express.js
-	Node.js
-	Database entity relationships
-	Insomnia


## Installation 
Before using this application, install all the node modules, the database, and all the seed data by following the steps below: 
1.	Open a terminal that is running from the same folder as the server.js file
2.	Run the command (with no quotes) “psql -U postgres -f db/schema.sql”
3.	Enter the password “1234”
4.	Run the command “npm run seed”
5.	Run the command “node server.js” to sync Sequelize models to the DB


## Usage
Once the tool is invoked using the steps above, the user can view the routes using a tool like Insomnia. The routes that can be run with the JSON data (where relevant) is listed below: 
<br/><br/>

**GET Routes**

    All categories (http://localhost:3001/api/categories)

    All products (http://localhost:3001/api/products)

    All tags (http://localhost:3001/api/tags)

    A single category (http://localhost:3001/api/categories/:id)

    A single product (http://localhost:3001/api/products/:id)

    A single tag (http://localhost:3001/api/tags/:id)

<br/>



**POST Routes**

    Categories (http://localhost:3001/api/categories)

    {
    "category_name": "TEXT HERE"
    }
  <br/>

    Products (http://localhost:3001/api/products)

    {
      "product_name": " TEXT HERE ",
      "price": ####.##,
      "stock": ##,
      "category_id": #,
      "tagIds": [#, #]
    }
  <br/>

    Tags (http://localhost:3001/api/tags)

    {
    "tag_name": " TEXT HERE "
    }
<br/>
<br/>

**PUT Routes**

    Categories (http://localhost:3001/api/categories/:id)
    {
      "category_name": " TEXT HERE "
    }
  <br/>

    Products (http://localhost:3001/api/products/:id)
    {
      "category_name": " TEXT HERE "
    }
  <br/>

    Tags (http://localhost:3001/api/tags/:id)
    {
      "tag_name": " TEXT HERE "
    }
  <br/>

**DELETE Routes**

    Categories (http://localhost:3001/api/categories/:id)
    Products (http://localhost:3001/api/products/:id)
    Tags (http://localhost:3001/api/tags/:id)
<br/>


![A screenshot of a GET request payload being initiated in Insomnia.](./Assets/images/screenshot.png)


## Credits
- Scenario presented by Denver University in the Bootcamp course ID DU-VIRT-FSF-PT-12-2023-U-LOLC-MWTH under Module 13 Challenge. Started code provided by through the curriculum and remaining code was refactored by and submitted by Jordan R. Heersink.
- This tool uses Node.js, Express.js, PostgreSQL, and Sequelize


## License
https://opensource.org/licenses/MIT 

  Copyright (c) {{ 2024 }} {{ Jordan Heersink }}
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
    OR OTHER DEALINGS IN THE SOFTWARE.