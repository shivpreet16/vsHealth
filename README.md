# VSCodeHelp Internship Task
#### By Shivpreet Padhi

This repository has the code for the frontend and backend internship assignment by VSCodeHelp. It contains:
1. Source Code
2. Database Queries
3. Dummy data to populate database

## To run locally

### Dependencies

1. Node (^=v16.15.1)
2. MongoDB
3. XAMPP

If the above are correctly installed, this website should work on Windows, Mac, and Linux.

### Steps to run the code

##### 1. Clone the repository

```
git clone https://github.com/shivpreet16/vsHealth.git
```

Open the cloned repository in an editor of your choice.

Alternatively, you can also:

    1.1. Download repository as a zip folder on your local machine

    1.2. Unzip the folder

    1.3. Open the folder in an editor of your choice


##### 2. Set up the databases

For a good balance between performance and flexibility, I have used a polygot / hybrid architecture between SQL and NoSQL. Essentially, there are two types of databases at work:

1. **SQL**: I have used SQL for transaction heavy features. This includes clinic data, time slots, and appointment data.

    For the SQL part, I used MySQL from XAMPP. The detailed schema and queries are present in `server > db.md`. However, on running the server, these will get created if they do not already exist. 
    
    So, to run on local, follow the given steps:

        1. Install XAMPP
        
        2. Go to `server > utils > connect.js`
        
        3. In the `sqlConnect` function, ensure that host and dialect are set correctly. If you use password, it can be set with the same set of parameters:

        ```
        {
            host: "localhost",
            dialect: "mysql",
            logging: false,
            password: "your-password-here",
        }
        ``` 

2. **NoSQL**: I have used NoSQL for variable length data that will not change much and is required by simple retrieval and insertion queries. This includes all the doctor profile related data.
        
    The detailed schema can be seen in `server > models > doctors.model.js`
    
    To run on local, you must have MongoDB Compass installed. If you are on Windows, you will have to exclusively install MongoDB SH.

    After this, go to `server > utils > connect.js` and ensure that the `.connect("localhost path")` is correct in the `mongoConnect()` function.


##### 3. Run the server

1. Open terminal and navigate to the folder containing the cloned repo.

2. Move to the server directory
```
cd server
```

3. Install all packages
```
npm install
```

4. Run the server
```
npm start
```

##### 3. Populate the databases

Dummy data is available in `server > utils > constants.js` and there are APIs.
