# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: To fix this mistake, generate a migrations file named specifically what your intentions are to do to. After generating the migrations file, need to run $rails db: migrate which creates a new file. Within that file and within that method, use add_column :table_name, :column_name, :datatype. :table_name specifies which Model you are targeting, :column_name correlates with what you want to add, since it is missing a foreign key, it will be :cohort_id. This will be on the student model.

Researched answer: To fix this mistake, open the terminal make sure you are in the correct file and run command $rails g migration, name the file name that starts with the action that describes the purpose of the migration i.e add_column_to_list. Afterwards, a file will be added to the migrate directory and within that file there is a def change method already built. Next, within that method, we want to add a column, add_column :table_name, :column_name, :datatype. :table_name specifies which table we are adding too (:students), :column_name is the name of the new column (:cohort_id), and :datatype is a primitive data type (integer). Since the cohort model has_many students the foreign key will be :cohort_id because it is specifying students belongs_to cohort. The foreign key will also be on the Student model. After checking the migrations file, if it looks correct run db:migrate then it will show up on the schema file.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes that must take a parameter is show, edit, update, destroy. For all of these RESTful routes the param is needed in order to specify which primary key or ID is needed to specify in the url. 

Researched answer: The RESTful routes that must take a parameter are show, edit, create, update, and destroy. Within the Show method, the param is used to show one item in the database by accessing the ID. Edit, will use a form for the specified id you want to edit. Create will call upon the strong params method. Update will update the specified item in the database by accessing the ID. Destroy will delete the specified item in the database by accessing the ID.

3. Name three rails generator commands. What is created by each?

Your answer: The three rails generator commands are model, conroller, and resource. Model creates a database. Controller creates the controller file for the model. Resource creates the model, controller, routes, and view files. 

Researched answer: The three rails generator commands are model, controller, and resource. When generating a model, it creates a model, migration, and rspec file. When generating a controller, it creates a controller,views, and rpsec file. When generating resource, it generates similar to model, in addition it creates model, controller,views,routes, and respective rspec files.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students -- index

action: "POST" location: /students -- update

action: "GET" location: /students/new -- new

action: "GET" location: /students/2 -- show

action: "GET" location: /students/2/edit -- edit

action: "PATCH" location: /students/2 -- update

action: "DELETE" location: /students/2 -- destroy

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

Story 1: Interaction with fish application, as a user of the application, I need to see a list of fish posts.
    - Create a new rails application called 'best__spear_fishing_locations_in_okinawa'
    - Create a resource for fish that has the follow information: name, type of fish, length, weight, venomous, and poisonous.
    - Has a controller for fish, and has a action for index.
    - Has a route and view for index.
    - Can create a new fish. Can navigate back to landing page.
    - Can update a fish. Can navigate back to landing page.
    - Can delete a fish. Can navigate back to landing page.
    - Can edit a fish. Can navigate back to landing page.
    - Can see minimum of 3 fish on on the landing page.
    - Hint: Need strong params, also show, edit, update, destroy have parameters.

Story 2: Interaction with fish application, as a user of the application, I need to see a list of the locations of the fish using migrations.
    - Create a migration for location to add the following column information: coastline.
    - Update the values for coastline.

Story 3: Need to secure the fish post application, I need to ensure only valid entries into the database.
    - Ensure all fish posts are non blank non nil values.
    - Ensure all fish names and type of fish are unique.

Story 4: Customize the page with CSS to make it look presentable. 