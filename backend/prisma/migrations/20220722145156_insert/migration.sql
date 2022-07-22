-- Let's insert data on the DB


INSERT INTO "Rota"(name, driver_id) VALUES ('Amoreiras', 1); 
INSERT INTO "Rota"(name, driver_id) VALUES ('Benfica', 2); 
INSERT INTO "Rota"(name, driver_id) VALUES ('Amadora', 3);

INSERT INTO "Client"(name, rota_id, address) VALUES ('Momentos de Leitura', 2, 'Rua do Colombo, Lote B'); 
INSERT INTO "Client"(name, rota_id, address) VALUES ('O Indiano', 2, 'Avenida Linha das Torres'); 