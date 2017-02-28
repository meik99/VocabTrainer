use vocabDB;

select unit.id, unit.description, unit.trivia from unit
where unit.id in 
(
	select level_unit.unit_id from level_unit
	where level_unit.schoollevel_id = 1
)
and
unit.id in
(
	select unit_vocab.unit_id from unit_vocab
    where unit_vocab.vocab_id in
    (
		select vocab.id from vocab
        where vocab.word_id in
        (
			select word.id from word
            where word.language_id = 1 or word.language_id = 2
        )
        or vocab.foreign_word_id in
        (
			select word.id from word
            where word.language_id = 1 or word.language_id = 2
        )
    )
)
;
