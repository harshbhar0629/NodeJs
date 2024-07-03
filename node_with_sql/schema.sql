SHOW TABLES;

create table user{
    id varchar(20) primary key,
    username varchar(20) unique,
    email varchar(40) unique not null,
    pass varchar(20) not null
};