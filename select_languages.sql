use vocabDB;

select language.id id, language.description description from language
where language.id IN 
(
    select language_id from word
    where word.id IN 
    (
        select word_id from vocab
        where id IN 
        (
            select vocab_id from unit_vocab
            where unit_id IN 
            (
                select unit_id from level_unit
                where schoollevel_id = 6
			)
		)
        union all
        select foreign_word_id from vocab
        where id IN 
        (
            select vocab_id from unit_vocab
            where unit_id IN 
            (
                select unit_id from level_unit
                where schoollevel_id = 6
			)
		)
	)
);
