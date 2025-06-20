SELECT rating, COUNT(*) AS total
FROM film
GROUP BY rating;

SELECT title, rating
FROM film
WHERE rating IN ('G', 'PG-13');

SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13') AND length < 120 AND rental_rate < 3.00
ORDER BY title;

UPDATE customer
SET first_name = 'TonPrenom', last_name = 'TonNom', email = 'tonemail@example.com'
WHERE customer_id = 1;

UPDATE address
SET address = '123 Rue Exemple', city_id = 1, postal_code = '10000', phone = '0123456789'
WHERE address_id = (
    SELECT address_id FROM customer WHERE customer_id = 1
);
