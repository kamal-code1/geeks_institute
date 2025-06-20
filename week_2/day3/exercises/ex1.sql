select * from language

select f.title, f.description,l.name
from film f
join language l on f.language_id = l.language_id

select f.title, f.description,l.name
from film f
left join language l on f.language_id = l.language_id

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES
('fight club'),
('batman 2'),
('road to kabul');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255),
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
(1, 1, 'Excellent Film', 9, 'i really loved the movie cant wait for part 2'),
(2, 1, 'Not Bad', 7, 'it was good and i recommand it .');

delete from new_film where id = 1; the row of id 1 in customer_review deleted completly


---------------------------------------------------------------------------------
ex2
1
UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2);

2
You must insert valid address and store values first before inserting into customer.

3
DROP TABLE customer_review; easy no table depends on it 

4
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL; 183

5
SELECT f.film_id, f.title, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.replacement_cost DESC
LIMIT 30;

6.1
SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
  AND (f.description ILIKE '%sumo%' OR f.title ILIKE '%sumo%');

6.2
SELECT * 
FROM film 
WHERE length < 60 AND rating = 'R'

6.3
SELECT f.title
FROM payment p
JOIN rental r ON p.rental_id = r.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON p.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND p.amount > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01'; Sugar wonka

6.4
SELECT f.title, f.description, f.replacement_cost
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC; Stone Fire












