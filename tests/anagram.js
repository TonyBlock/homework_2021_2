'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Все слова - одна группа анаграмм', function (assert) {
		const input = [
			'пакт', 'такп',
			'ктап', 'ткпа'
		];

		const output = [
			['ктап', 'пакт', 'такп', 'ткпа']
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Отсутствуют анаграммы', function (assert) {
		const input = [
			'технопарк', 'бауманка',
			'фронтенд', 'javascript'
		];

		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('На вход подаётся не массив, а число', function (assert) {
		const input = 7;

		const output = null;

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('На вход подаётся массив, где не все элементы - строки', function (assert) {
		const input = [
			'сентябрь', 'осень',
			404, 'учёба'
		];

		const output = null;

		assert.deepEqual(anagram(input), output);
	});
});
