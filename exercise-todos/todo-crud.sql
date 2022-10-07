-- this is the function to create the table
CREATE TABLE "todos" (
  "id" uuid PRIMARY KEY,
  "title" varchar NOT NULL,
  "designed_to" varchar NOT NULL,
  "description" text,
  "start_date" date DEFAULT 'now()',
  "end_date" date NOT NULL,
  "is_completed" bool DEFAULT false
);

-- these are the todos 
insert into todos 
(
	id, 
	title, 
	designed_to, 
	description, 
	start_date,
	end_date,
	is_completed
) values (
	'41d5e2a7-4af7-4cc7-acac-7643d6f31aac',
	'Gael',
	'Wash the dishes',
	'Very clean', 
	'2022/09/21', 
	'2022/09/21',
	false
), 
(
	'10364223-3b36-439e-ad92-b15da23b4dca',
	'Luis',
	'Do homework',
	'NodeJS Homework', 
	'2022/09/19', 
	'2022/09/22',
	false
),
(
	'83fd15cb-0e71-4a03-857f-006bbfe4cdc3',
	'Elvis',
	'Study English',
	'Irregular Verbs', 
	'2022/08/10', 
	'2022/09/10',
	true
);

-- this is the select part 
select * from todos;
select title from todos where is_completed=true;