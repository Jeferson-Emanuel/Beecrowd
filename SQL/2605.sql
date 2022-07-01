SELECT p1.name, p2.name FROM products AS p1
INNER JOIN providers AS p2
ON p.id = p1.id_providers
INNER JOIN categories AS c
ON c.id = p1.id_categories
WHERE p1.id_categories = 6;