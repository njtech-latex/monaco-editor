import { testTokenization } from '../test/testRunner';

testTokenization('bib', [
	// Bib entry types
	[
		{
			line: '@article',
			tokens: [
				{
					startIndex: 0,
					type: 'keyword.bib'
				}
			]
		},
		{
			line: '@book{',
			tokens: [
				{
					startIndex: 0,
					type: 'keyword.bib'
				},
				{
					startIndex: 5,
					type: 'delimiter.curly.bib'
				}
			]
		}
	],

	// Field names
	[
		{
			line: 'title=',
			tokens: [
				{
					startIndex: 0,
					type: 'variable.bib'
				},
				{
					startIndex: 5,
					type: 'delimiter.bib'
				}
			]
		},
		{
			line: 'author =',
			tokens: [
				{
					startIndex: 0,
					type: 'variable.bib'
				},
				{
					startIndex: 6,
					type: 'white.bib'
				},
				{
					startIndex: 7,
					type: 'delimiter.bib'
				}
			]
		}
	],

	// Strings
	[
		{
			line: '"string"',
			tokens: [
				{
					startIndex: 0,
					type: 'string.bib'
				}
			]
		},
		{
			line: '"string with spaces"',
			tokens: [
				{
					startIndex: 0,
					type: 'string.bib'
				}
			]
		},
		{
			line: '"string with spaces and special characters: !@#$%^&*()"',
			tokens: [
				{
					startIndex: 0,
					type: 'string.bib'
				}
			]
		}
	],

	// LaTeX commands
	[
		{
			line: '\\TeX',
			tokens: [
				{
					startIndex: 0,
					type: 'keyword.bib'
				}
			]
		}
	]
]);
