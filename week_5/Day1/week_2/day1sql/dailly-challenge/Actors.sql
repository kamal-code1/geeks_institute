select count(*) from actors

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon',' ', 5);

-- ERROR:  syntaxe en entrée invalide pour le type date : «   »
-- LINE 2: VALUES('Matt','Damon',' ', 5);
--                               ^ 

-- ERREUR:  syntaxe en entrée invalide pour le type date : «   »
-- SQL state: 22007
-- Character: 86