use vocabDB;

insert into account select NULL, 'meik99', sha2('abcdef', 256), NULL, NULL from dual;

insert into schooltype values(1, 'HTL');
insert into schooltype values(2, 'HAK');
insert into schooltype values(3, 'AHS');


insert into schoollevel values(1, '1. Jahrgang', 1);
insert into schoollevel values(2, '2. Jahrgang', 1);
insert into schoollevel values(3, '3. Jahrgang', 1);
insert into schoollevel values(4, '4. Jahrgang', 1);
insert into schoollevel values(5, '5. Jahrgang', 1);


insert into schoollevel values(6, 'Gruppe Bären', 2);
insert into schoollevel values(7, 'Gruppe Mäuse', 2);
insert into schoollevel values(8, 'Gruppe Enten', 2);
insert into schoollevel values(9, 'Gruppe Hunde', 2);


insert into schoollevel values(10, '1. Klasse', 3);
insert into schoollevel values(11, '2. Klasse', 3);
insert into schoollevel values(12, '3. Klasse', 3);
insert into schoollevel values(13, '4. Klasse', 3);
insert into schoollevel values(14, '5. Klasse', 3);
insert into schoollevel values(15, '6. Klasse', 3);
insert into schoollevel values(16, '7. Klasse', 3);
insert into schoollevel values(17, '8. Klasse', 3);

insert into language values(1, 'Deutsch');
insert into language values(2, 'Englisch');
insert into language values(3, 'Spanisch');


insert into word values(1, 1, 'Haus');
insert into word values(2, 1, 'groß');
insert into word values(3, 1, 'klein');
insert into word values(4, 1, 'Hund');
insert into word values(5, 1, 'Katze');
insert into word values(6, 1, 'Maus');


insert into word values(7, 2, 'house');
insert into word values(8, 2, 'big');
insert into word values(9, 2, 'small');
insert into word values(10, 2, 'dog');
insert into word values(11, 2, 'cat');
insert into word values(12, 2, 'mouse');


insert into word values(13, 3, 'case');
insert into word values(14, 3, 'grande');
insert into word values(15, 3, 'pequeña');
insert into word values(16, 3, 'perro');
insert into word values(17, 3, 'gato');
insert into word values(18, 3, 'ratón');


insert into vocab values(1, 1, 7);
insert into vocab values(2, 2, 8);
insert into vocab values(3, 3, 9);
insert into vocab values(4, 4, 10);
insert into vocab values(5, 5, 11);
insert into vocab values(6, 6, 12);


insert into vocab values(7, 1, 13);
insert into vocab values(8, 2, 14);
insert into vocab values(9, 3, 15);
insert into vocab values(10, 4, 16);
insert into vocab values(11, 5, 17);
insert into vocab values(12, 6, 18);


insert into vocab values(13, 7, 13);
insert into vocab values(14, 8, 14);
insert into vocab values(15, 9, 15);
insert into vocab values(16, 10, 16);
insert into vocab values(17, 11, 17);
insert into vocab values(18, 12, 18);

insert into unit(id, description) values(1, "Unit 1");
insert into unit(id, description) values(2, "Unit 2");
insert into unit(id, description) values(3, "Unit 3");

insert into unit(id, description) values(4, "Unit 1");
insert into unit(id, description) values(5, "Unit 2");
insert into unit(id, description) values(6, "Unit 3");

insert into unit(id, description) values(7, "Stay away from electric circuits");
insert into unit(id, description) values(8, "The Thumbs does not belong into the mouth");
insert into unit(id, description) values(9, "Rectangles are not triangles");

insert into level_unit values(1, 1);
insert into level_unit values(2, 2);
insert into level_unit values(3, 3);

insert into level_unit values(10, 4);
insert into level_unit values(11, 5);
insert into level_unit values(12, 6);

insert into level_unit values(6, 7);
insert into level_unit values(7, 8);
insert into level_unit values(8, 9);

insert into unit_vocab values(1, 1);
insert into unit_vocab values(1, 2);
insert into unit_vocab values(2, 3);
insert into unit_vocab values(2, 4);
insert into unit_vocab values(3, 5);
insert into unit_vocab values(3, 6);

insert into unit_vocab values(4, 1);
insert into unit_vocab values(4, 2);
insert into unit_vocab values(5, 3);
insert into unit_vocab values(5, 4);
insert into unit_vocab values(6, 5);
insert into unit_vocab values(6, 6);

insert into unit_vocab values(7, 7);
insert into unit_vocab values(7, 8);
insert into unit_vocab values(8, 9);
insert into unit_vocab values(8, 10);
insert into unit_vocab values(9, 11);
insert into unit_vocab values(9, 12);
