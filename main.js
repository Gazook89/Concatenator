const inputString = document.getElementById('text-string');
const tagName = document.getElementById('tag-name');
const rowDelimiter = document.getElementById('rowDelimiter');
const tagDelimiter = document.getElementById('tagDelimiter');
const newTagDelimiter = document.getElementById('newTagDelimiter');
const spaces = document.getElementById('spaces')
const maxTags = document.getElementById('maxTags')

const outputList = document.getElementById('output-list');


const runScript = function(){
    const arrayOfArrays = inputString.value.split(rowDelimiter.value);

    let output = {
        data: {keptTags: [], discardTags: []},
        html: []
    };

    for(let arr in arrayOfArrays){
        const splitArr = arrayOfArrays[arr].split(tagDelimiter.value || ' ');
        const keptTags = maxTags.value > 0 ? splitArr.slice(0, maxTags.value) : splitArr;
        const discardTags = maxTags.value > 0 ? splitArr.slice(maxTags.value + 1) : [];
        output.data.keptTags.push(keptTags);
        output.data.discardTags.push(discardTags);

        let tag = [];
        if(tagName.value.length > 0){
            tag = [
                '\<' + tagName.value + '>',
                '\</' + tagName.value + '>'
            ]
        } else {
            tag = ['',''] 
        }

        const text =  ` `.repeat(spaces.value) + tag[0] + keptTags.join(newTagDelimiter.value ? newTagDelimiter.value : ' ') + tag[1];
        const listItem = Object.assign(document.createElement('li'))

        listItem.append(text);
        output.html.push(listItem)
        outputList.append(listItem);
    }
    console.log(output)
}

const clearInput = function(){
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input=>{
        input.value = ''
    })
}

const clearOutput = function(){
    outputList.replaceChildren();
}

const setPreset = function(preset){
    if(preset == 'Krane'){
        tagName.value = 'item';
        rowDelimiter.value = ' ';
        tagDelimiter.value = '-';
        newTagDelimiter.value = ' ';
        spaces.value = 4;
        inputString.focus();
    }

}