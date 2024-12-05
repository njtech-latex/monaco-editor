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
	]
};

export const language = <languages.IMonarchLanguage>{
	defaultToken: '',
	tokenPostfix: '.tex',

	// The main tokenizer for our languages
	tokenizer: {
		root: [
			[/(%.*)/, 'comment'], // comments
			[/\\[a-zA-Z]+/, 'keyword'] // other commands
		]
	}
};
