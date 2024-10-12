/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import type { languages } from '../../fillers/monaco-editor-core';

// .bib file is a bibliography file
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
	]
};

export const language = <languages.IMonarchLanguage>{
	defaultToken: '',
	tokenPostfix: '.bib',
	ignoreCase: true,

	// The main tokenizer for our languages
	tokenizer: {
		root: [
			[/(%.*)/, 'comment'], // comments
			[/@[a-zA-Z]+/, 'keyword'], // commands
			[/\b\w+\b(?=\s*=)/, 'key'] // keys before '='
		]
	}
};
