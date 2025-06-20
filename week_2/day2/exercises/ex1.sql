-- select * from items order by price asc
 -- select * from items where price >= 80 order by price desc

-- SELECT firstname, lastname FROM customers ORDER BY firstname ASC LIMIT 3;
-- select DISTINCT last_name from customers ORDER BY last_name DESC;


-----------------------------------------------------------------------
ex2
-- select * from customer
-- select (first_name, last_name) as full_name from customer
-- select DISTINCT create_date from customer;

-- SELECT * FROM customer ORDER BY first_name DESC;

-- select film_id ,title,description,release_year,rental_rate 
-- from film 
-- order by rental_rate ASC;

-- SELECT address, phone
-- FROM address
-- WHERE district = 'Texas';

-- SELECT *
-- FROM film
-- WHERE film_id IN (15, 150);

-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = 'fight club';


-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title LIKE 'fi%';

-- select * from film

-- SELECT film_id, title, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC
-- LIMIT 10;

-- SELECT film_id, title, rental_rate
-- FROM (
--   SELECT film_id, title, rental_rate,
--          ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS rn
--   FROM film
-- ) AS ranked
-- WHERE rn BETWEEN 11 AND 20;

-- SELECT c.first_name, c.last_name, p.amount, p.payment_date
-- FROM customer c
-- INNER JOIN payment p ON c.customer_id = p.customer_id
-- ORDER BY c.customer_id;

-- SELECT * FROM film
-- WHERE film_id NOT IN (
--   SELECT film_id FROM inventory
-- );

-- SELECT city.city , country.country 
-- FROM city 
-- INNER JOIN country on city.country_id = country.country_id


-- SELECT c.customer_id, c.first_name, c.last_name,
--        p.amount, p.payment_date, p.staff_id
-- FROM customer c
-- JOIN payment p ON c.customer_id = p.customer_id
-- ORDER BY p.staff_id;

