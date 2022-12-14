 -- Create a User Account table
 CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email varchar(255) NOT NULL,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    passwordDigest varchar(255) NOT NULL,
    roles varchar(255) NOT NULL
    );

 CREATE TABLE inventory (
    item_id SERIAL PRIMARY KEY,
    category varchar(255),
    item varchar(255),
    supplier varchar(255),
    unitEach varchar(255),
    parOnHand integer
    );

-- Insert seed data (fake users)
INSERT INTO Users (email, firstName, lastName, passwordDigest, roles) VALUES ('stan@crazymail.com', 'Stan', 'Stanton', '1234', 'Manager');


INSERT INTO inventory (category, item, supplier, unitEach, parOnHand) VALUES ('Produce', 'Bananas', 'VIP', 'lbs.', 40);


-->        psql --host=ec2-34-193-44-192.compute-1.amazonaws.com --port=5432 --username=wcbkbmkoxzutux --password --dbname=dfl7shtsg0hv9q
