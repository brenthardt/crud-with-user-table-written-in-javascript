User Manager
This is a simple local storage-based user management app built with HTML, JavaScript, and Bootstrap. It allows you to add, edit, delete, and manage user records directly in the browser without any backend.

Features
Add a new user with email, first name, and last name.

Keep track of a numeric count for each user.

Increase or decrease the count for new or existing users.

Edit user details and their count.

Delete individual users.

Clear all users, half of them, or just the last one.

View summaries for how many users have been added, edited, and deleted.

All user data is stored in localStorage, so your data stays even if you refresh the page.

How it works
Use the left form to add a new user. Enter email, first name, last name, and adjust the count using the plus and minus buttons. Click save to add the user.

Use the right form to edit an existing user. Click the edit button in the user table to load a user’s info into the form. Make changes and click apply.

Each user in the table has buttons to increment, decrement, or clear their count, as well as to edit or delete them.

The summary section shows how many times users have been added, edited, or deleted.

Running the app
Simply open the index.html file in your browser. There’s no setup needed.

Technologies
HTML

CSS (Bootstrap)

JavaScript

Note
This is a simple project intended for practice or small demos. Data is stored locally in the browser and will not sync across devices.
