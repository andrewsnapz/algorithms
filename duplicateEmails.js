/*
Write a SQL query to find all duplicate emails in a table named Person.

+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
For example, your query should return the following for the above table:

+---------+
| Email   |
+---------+
| a@b.com |
+---------+

*/

/*
My SQL Query (252ms - 694ms): 
SELECT Email FROM Person GROUP BY Email HAVING COUNT(Email) > 1;

Other attempt (Close but wrong, it gives me two of the same emails):
SELECT 1st.Email AS Email FROM Person 1st INNER JOIN Person 2nd ON (1st.Email = 2nd.Email AND 1st.Id != 2nd.Id)

*/