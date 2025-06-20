CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE product_orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    item_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    quantity INT DEFAULT 1,
    FOREIGN KEY (order_id) REFERENCES product_orders(order_id)
);

DELIMITER $$

CREATE FUNCTION get_total_price(orderId INT) RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE total DECIMAL(10,2);
    SELECT SUM(price * quantity) INTO total FROM items WHERE order_id = orderId;
    RETURN IFNULL(total, 0);
END $$

CREATE FUNCTION get_user_order_total(userId INT, orderId INT) RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE total DECIMAL(10,2);
    SELECT SUM(i.price * i.quantity) INTO total
    FROM items i
    JOIN product_orders po ON i.order_id = po.order_id
    WHERE po.order_id = orderId AND po.user_id = userId;
    RETURN IFNULL(total, 0);
END $$

DELIMITER ;
