# bamazon
Creating an Amazon-like storefront with MySQL and Node skills. The app will take in orders for a fictious t-shirt store "Tween Attitude" from customers and deplete stock from the store's inventory. The customer will get a final bill at the end. 

#to install bamazon:

1) confirm that you have Node on your computer by typing "node --v" in your terminal.

2) confirm that you have mySQL on your computer for MAC:

    a) go to System Preferences, access the general directory by selecting the button on the top line that looks like several rows of dots.

    b) Look for the MySQl icon. If no icon, please install mySql (https://dev.mysql.com/downloads/file/)  and mySQL Workbench (https://dev.mysql.com/downloads/workbench/).

3) in terminal, git clone the repository in a new directory.

4) change to new directory type "npm init" and hit enter.

5) in terminal type "npm install" to create the package.json files and pull in all the dependencies for npm inquirer and npm mysql.

6) in your code editor, open the bamazon.sql file, copy it and insert it into  a blank connection in mySQL Workbench. Run the file by pressing the LARGE lightning bolt. Left click on the "Schema" column in Workbench choose "refresh All" and the Schema should show up in the column.

7) Right click the "products" under Bamazon tables, and select Table Import Wizard. Browse for the correct file in the correct directory "products.csv", choose next. Choose existing table, then press next. Then press next to finish.

8) Open another blank instance in Workbench and paste 
SELECT * FROM bamazon_db.products;
Run the file by pressing the LARGE lightning bolt. The Bamazon products table "database" should be clearly seen on the screen.

You are ready to operate the "bamazon" app.
Go to Terminal in the correct directory.

#to operate bamazon
1) in terminal, in the correct directory type "node bamazonCustomer" and press enter. You will see a stock inventory list of the "Tween Attitude Store".
You will be prompted to select a item for purchase by entering the item id.
See file Step1.png

2) Enter the item id and the quantity to be purchased. Bamazon will check to see if amount is available for purchase and then subtract that amount from that item's inventory. A final total cost is provided for the customer.
See file Step2.png