show databases;
drop database amazon;
create database amazon;
use amazon;
create table category(
cid int primary key,
cname varchar(25) not null);
select*from category;
create table product(
pid int primary key,
pname varchar(25) not null,
cid int ,
foreign key(cid)references category (cid));
select*from product;

