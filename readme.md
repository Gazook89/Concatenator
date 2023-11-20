# Concatenator

Concatenator is a basic tool to help with formatting lists of tags for either roll20 file names or a random generator creator like Jazza's Arty Games app.

## How to use

- Word List: (string) - the words that will be used for your tags.  The string is split by commas (by default) into individual rows, and those rows are divided into individual words by spaces (by default).
- XML Tag: (string) - will place the input inside `<` `>` brackets on either side of your tag sets.  If nothing entered, it will leave the brackets out.
- Split Rows On (string) - set a delimiter, or character, to split your word list into rows.  Default is `,`.
- Split Tags On (string) - set a delimiter, or character, to split tags within a row.  Default is ` `.
- New Tag Delimiter (string) - add a delimiter back into your output, inserted between each tag inside a row.  Default is ` `.  
- Spaces: (number) - The value here will determine how many spaces at the beginning of reach row, if pasting into a text editor.
- Max Tags per Row: (number) - You can trim the number of tags in a row.  If left empty there is no limit.

Hit the Concatenate button!  Any subsequent submission will be appended to the existing list.  The list or input fields can be cleared with the relevant buttons.  The output list is editable (click into it) for making little adjustments.

## Contributing

This is a simple project.  Feel free to add simple contributions with a PR or posting an issue.