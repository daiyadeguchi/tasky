CREATE TABLE todos (
    id serial PRIMARY KEY, 
    status integer, 
    title varchar(80), 
    description varchar(255)
);
