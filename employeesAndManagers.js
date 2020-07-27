/*

Employee Table:
+----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+

Write a SQL query that finds out employees whos earn more than their managers.
In this case:

+----------+
| Employee |
+----------+
| Joe      |
+----------+

*/

/* 
SQL Query (Mine) (169ms):
SELECT e.Name AS Employee FROM Employee e INNER JOIN Employee m ON e.ManagerId = m.Id WHERE e.Salary > m.Salary;

Other potential answer (80ms):
SELECT e.Name Employee FROM Employee e INNER JOIN Employee m ON (e.ManagerId = m.Id AND e.Salary > m.Salary)

*/
