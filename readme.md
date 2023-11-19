# Concatenator

Concatenator is a basic tool to help with formatting lists of tags for either roll20 file names or a random generator creator.

## How to use

- XML Tag: (string) - will place the input inside `<` `>` brackets on either side of your tag sets.  If nothing entered, it will leave the brackets out.
- Word List: (string) - the words that will be used for your tags.  The string is split by commas into individual rows, and those rows are divided into individual words by spaces (by default).
- Delimiter (string) - set a delimiter, or character that separates tags within a row.  Default is `\s`.  Useful if creating files names like `House-Spider-Cat.jpg`.
- Spaces: (number) - The value here will determine how many spaces at the beginning of reach row, if pasting into a text editor.
- Max Tags per Row: (number) - You can trim the number of tags in a row.  If left empty there is no limit.

Hit the Concatenate button!  Any subsequent submission will be appended to the existing list.  The list or input fields can be cleared with the relevant buttons.  The output list is editable (click into it) for making little adjustments.

## Contributing

This is a simple project.  Feel free to add simple contributions with a PR or posting an issue.