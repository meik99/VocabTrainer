use vocabDB;

drop table if exists level_unit;
drop table if exists unit_vocab;
drop table if exists vocab;
drop table if exists unit;
drop table if exists word;
drop table if exists schoollevel;
drop table if exists language;
drop table if exists schooltype;

create table schooltype(
	id int primary key,
	description varchar(255) not null,

	index type_index (id)
);

create table schoollevel(
	id int primary key,
	description varchar(255) not null,
	schooltype_id int not null,

	index level_index (id),

	constraint schooltype_pk 
		foreign key type_fk_index (schooltype_id) 
		references schooltype (id)
);

create table language(
	id int primary key,
	description varchar(255) not null,
	index language_index (id)
);

create table word(
	id int primary key,
	language_id int not null,
	word varchar(255) not null,
	index word_index (id),

	constraint language_pk 
		foreign key language_fk_index (language_id)
		references language (id)
);

create table vocab(
	id int primary key,
	word_id int not null,
	foreign_word_id int not null,

	index vocab_index (id),

	constraint word_pk 
		foreign key word_fk_index (word_id) 
		references word (id),
	constraint foreign_word_pk 
		foreign key foreign_word_fk_index (foreign_word_id)
		references word (id)
);

create table unit(
	id int primary key,
	description varchar(255) not null,
	trivia varchar(1000),
	index unit_index (id)
);

create table level_unit(
	schoollevel_id int not null,
	unit_id int not null,

	constraint level_assoc_unit_pk 
		foreign key level_assoc_index (schoollevel_id)
		references schoollevel(id),

	constraint unit_assoc_level_pk 
		foreign key unit_assoc_index (unit_id)
		references unit(id)
);

create table unit_vocab(
	unit_id int not null,
	vocab_id int not null,
	
	constraint unit_assoc_vocab_pk 
		foreign key unit_vocab_assoc_index (unit_id)
		references unit(id),
	constraint vocab_assoc_unit_pk 
		foreign key vocab_unit_assoc_index (vocab_id)
		references vocab(id)
);

select '' 'level_unit_assoc' from dual;
select '' '=================' from dual;
show columns from level_unit;
select '' '=================' from dual;
select '' 'unit_vocab_assoc' from dual;
select '' '=================' from dual;
show columns from unit_vocab;
select '' '=================' from dual;
select '' 'vocab' from dual;
select '' '=================' from dual;
show columns from vocab;
select '' '=================' from dual;
select '' 'unit' from dual;
select '' '=================' from dual;
show columns from unit;
select '' '=================' from dual;
select '' 'word' from dual;
select '' '=================' from dual;
show columns from word;
select '' '=================' from dual;
select '' 'schoollevel' from dual;
select '' '=================' from dual;
show columns from schoollevel;
select '' '=================' from dual;
select '' 'language' from dual;
select '' '=================' from dual;
show columns from language;
select '' '=================' from dual;
select '' 'schooltype' from dual;
select '' '=================' from dual;
show columns from schooltype;
select '' '=================' from dual;

