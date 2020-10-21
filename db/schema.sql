DROP DATABASE IF EXISTS dock_db;
CREATE DATABASE dock_db;
USE DATABASE dock_db;

CREATE TABLE languages (
    languageid int not null AUTO_INCREMENT,
    langName VARCHAR(255),
    PRIMARY KEY (languageid)
);

CREATE TABLE jobs (
    jobid int not null AUTO_INCREMENT,
    jobName VARCHAR(255),
    price decimal(15,2),
    languages VARCHAR(255)
    jobDone BOOLEAN NOT NULL default 0
    PRIMARY key (jobid)
);

CREATE TABLE userOption (
    jobsOpen INT(255),
    jobsDone INT(255),
    languages VARCHAR(255)
)