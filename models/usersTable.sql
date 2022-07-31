 -- Create a User Account table
 CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email varchar(255) NOT NULL,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    passwordDigest varchar(255) NOT NULL,
    roles varchar(255) NOT NULL
    );


-- Insert seed data (fake users)
INSERT INTO Users (email, firstName, lastName, passwordDigest, roles) VALUES ('stan@crazymail.com', 'Stan', 'Stanton', '1234', 'Manager');



-->        psql --host=ec2-34-193-44-192.compute-1.amazonaws.com --port=5432 --username=wcbkbmkoxzutux --password --dbname=dfl7shtsg0hv9q
