# XAMPP for mySQL

```mysql -u root -r```

```CREATE DATABASE VSCODEHELP;```

```USE VSCODEHELP;```

```
CREATE TABLE clinic(
    cid integer primary key,
    address varchar(255),
    phNo varchar(255)
);
```

```
CREATE TABLE slot(
    sid INTEGER PRIMARY KEY,
    did INTEGER,
    cid INTEGER,
    day VARCHAR(10),
    time VARCHAR(10),
    FOREIGN KEY (cid) REFERENCES clinic(cid),
    UNIQUE (did, cid, day, time)
);
```
```
CREATE TABLE slotAV(
    savid INTEGER PRIMARY KEY,
    did INTEGER,
    type enum(0,1),
    day VARCHAR(10),
    time VARCHAR(10),
    FOREIGN KEY (cid) REFERENCES clinic(cid),
    UNIQUE (did, cid, day, time)
);
```

```
CREATE TABLE users(
    uid INTEGER PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    currOTP INTEGER,
    timestamp TIMESTAMP,
    valid BOOLEAN
);
```

```
CREATE TABLE appointments(
    aid INTEGER PRIMARY KEY,
    uid INTEGER,
    patientName VARCHAR(255),
    sid INTEGER,
    savid INTEGER,
    date INTEGER,
    type INTEGER,
    FOREIGN KEY (uid) REFERENCES users(uid),
    FOREIGN KEY (sid) REFERENCES slots(sid)
    FOREIGN KEY (savid) REFERENCES slotavs(sid)
);
```