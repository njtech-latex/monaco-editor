/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../../fillers/monaco-editor-core';

// .bib file is a bibliography file
export const conf: languages.LanguageConfiguration = {
	brackets: [['{', '}']],
	autoClosingPairs: [
		{ open: '{', close: '}' },
		{ open: '"', close: '"' }
	],
	surroundingPairs: [
		{ open: '{', close: '}' },
		{ open: '"', close: '"' }
	],
	folding: {
		markers: {
			start: new RegExp('^\\s*@[a-zA-Z]+\\s*\\{'),
			end: new RegExp('^\\s*\\}')
		}
	},
	onEnterRules: [
		{
			beforeText: new RegExp('^\\s*@[a-zA-Z]+\\s*\\{'),
			action: { indentAction: languages.IndentAction.IndentOutdent }
		}
	]
};

export const language = <languages.IMonarchLanguage>{
	ignoreCase: true,
	tokenPostfix: '.bib',

	// Custom rules
	brackets: [{ open: '{', close: '}', token: 'delimiter.curly' }],

	// The main tokenizer for our languages
	tokenizer: {
		root: [
			// Symbols, whitespace, and others
			[/[=,]/, 'delimiter'],
			[/[ \t\r\n]+/, 'white'],
			[/[{}]/, '@brackets'],

			// Bib entry types like @article, @book, @inproceedings
			[/@[a-zA-Z]+/, 'keyword'],

			// Match field names like title, author, booktitle
			[/[a-zA-Z]+(?=\s*=\s*)/, 'variable'],

			// Match string
			[/".*"/, 'string'],

			// Match latex commands
			[/\\[a-zA-Z]+/, 'keyword']
		]
	}
};
