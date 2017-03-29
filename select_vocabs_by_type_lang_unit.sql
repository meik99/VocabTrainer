select 
	word.word word, 
	foreignWord.word foreignWord, 
    language.description 'language', 
    foreignLanguage.description foreignLanguage, 
    unit.description Unit, 
    schoollevel.description Schoollevel, 
    schooltype.description Schooltype
from vocab

join word foreignWord on (vocab.foreign_word_id = foreignWord.id)
join word  word on (vocab.word_id = word.id)
join language foreignLanguage on (foreignWord.language_id = foreignLanguage.id)
join language on (word.language_id = language.id)
join unit_vocab on (unit_vocab.vocab_id = vocab.id)
join unit on (unit_vocab.unit_id = unit.id)
join level_unit on (unit.id = level_unit.unit_id)
join schoollevel on (level_unit.schoollevel_id = schoollevel.id)
join schooltype on (schoollevel.schooltype_id = schooltype.id)

where 
	schooltype_id = 1 
    and schoollevel_id = 1 
    and unit.id = 1 
    and foreignLanguage.id = 2 
    and language.id = 1;