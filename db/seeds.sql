USE yorkEnterprise;

INSERT INTO department
    (dep_name)
VALUES 
    ('Product'),
    ('Sales'),
    ('Legal'),
    ('Accounting');

INSERT INTO role_table
(title, salary, department_id)
VALUES
  ('Sr Engineer', 180000.00, 1),
  ('Jr Engineer', 110000.00, 1),
  ('Account Manager', 90000.00, 2),
  ('Business Development Rep', 70000.00, 2),
  ('Lawyer', 100000.00, 3),
  ('Clerk', 65000.00, 3),
  ('Controller', 150000.00, 4),
  ('Accountant', 100000.00, 4);



INSERT INTO employees
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Albus', 'Dumbledore', 1, 1 ),
  ('Harry', 'Potter', 2, NULL ),
  ('Ron', 'Weasley', 3, NULL ),
  ('Hermione', 'Granger', 4, 3 ),
  ('Draco', 'Malfoy', 5, NULL),
  ('Lord', 'Voldemort', 6, 5),
  ('Severus', 'Snape', 1, 4),
  ('Rubeus', 'Hagrid', 7, NULL),
  ('Neville', 'Longbottom', 8, 8);

