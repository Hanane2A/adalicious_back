-- Table dishies
DROP TABLE IF EXISTS dishies;
create table dishies(
id integer primary key generated always as identity,
dish_name text,
description varchar,
image varchar,
price integer
);

-- INSERT INTO dishies (dish_name, description, image, price)
-- VALUES ('Hello World Burger' , 'Un cheeseburger classique (pain, steak, fromage, salade, sauce).', '🍔', 9),
--       ('JSON Nuggets', 'Nuggets de poulet avec 3 sauces au choix (ketchup, mayo, barbecue).', '🍗', 8),
--       ('Git Pull Tacos', 'Un taco simple avec poulet, salade, fromage et sauce.', '🌮',  9.50),
--       ('Front-end Salad', 'Une salade légère avec tomates, feta et vinaigrette maison.', '🥗', 10),
--       ('Back-End Brownie', 'Un brownie moelleux au chocolat.', '🍫', 4 ),
--       ('Full Stack Menu', 'plat, frites, dessert, boisson', '🥗', 19);


-- Table clients
DROP TABLE IF EXISTS clients;
create table clients(
id integer primary key generated always as identity,
firstname text

);

-- INSERT INTO clients (firstname)
-- VALUES ('Camille'),
--        ('Petro'),
--        ('Nael'),
--        ('Amine'),
--        ('Anyr'),
--        ('Lili');