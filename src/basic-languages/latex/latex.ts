/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../../fillers/monaco-editor-core';

export const conf: languages.LanguageConfiguration = {
	comments: {
		lineComment: '%'
	},
	brackets: [
		['{', '}'],
		['[', ']'],
		['(', ')']
	],
	autoClosingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' }
	],
	surroundingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' }
	],
	folding: {
		markers: {
			start: new RegExp('\\\\begin\\b'),
			end: new RegExp('\\\\end\\b')
		}
	},
	onEnterRules: [
		{
			beforeText: new RegExp('\\\\begin\\b'),
			action: { indentAction: languages.IndentAction.Indent }
		}
	]
};

export const language = <languages.IMonarchLanguage>{
	defaultToken: '',
	tokenPostfix: '.tex',

	// The main tokenizer for our languages
	tokenizer: {
		root: [
			// commands
			[
				'(\\\\begin)(\\s*)(\\{)([\\w\\-\\*\\@]+)(\\})',
				[
					'keyword.predefined',
					'white',
					'@brackets',
					{ token: 'tag.env-$4', bracket: '@open' },
					'@brackets'
				]
			],
			[
				'(\\\\end)(\\s*)(\\{)([\\w\\-\\*\\@]+)(\\})',
				[
					'keyword.predefined',
					'white',
					'@brackets',
					{ token: 'tag.env-$4', bracket: '@close' },
					'@brackets'
				]
			],

			// commands
			['\\\\[^a-zA-Z@]', 'keyword'],
			['\\@[a-zA-Z@]+', 'keyword.at'],
			['\\\\([a-zA-Z@]+)', 'keyword'],

			// whitespace and others
			['%.*$', 'comment'],
			['[ \\t\\r\\n]+', 'white'],
			['[{}()\\[\\]]', '@brackets'],
			['#+\\d', 'number.arg'],
			['\\-?(?:\\d+(?:\\.\\d+)?|\\.\\d+)\\s*(?:em|ex|pt|pc|sp|cm|mm|in)', 'number.len']
		]
	}
};
