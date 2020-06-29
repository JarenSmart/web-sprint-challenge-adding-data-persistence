<!-- 1. Explain the difference between `Relational Databases` and `SQL`. -->

In simplistic terms, SQL is a language that interacts with a relational database. (i.e.) SQLite3 is a relational database in which we use SQL to interact with. These databases manages your data by storing, updating, querying, etc. In order to manipulate that data, you must communicate with it somehow. That's where a language like SQL comes in.

<!-- 2. Why do tables need a `primary key`? -->

This allows us to query that table by row without altering the other rows in that same table. This also allows the table to be linked or 'joined' by another table to create unique queries. Lastly, it creates table orginization.

<!-- 3. What is the name given to a table column that references the primary key on another table. -->

The 'foreign key'.

<!-- 4. What do we need in order to have a _many to many_ relationship between two tables. -->

We would need an 'intermediary table' or 'junction table' that holds foreign keys that relate to both extending tables primary keys.
