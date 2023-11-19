const inputString = document.getElementById('text-string');
const tagName = document.getElementById('tag-name');
const spaces = document.getElementById('spaces')
const maxTags = document.getElementById('maxTags')

const outputList = document.getElementById('output-list');


const runScript = function(){
    const arrayOfArrays = inputString.value.split(', ');

    let output = {
        data: {keptTags: [], discardTags: []},
        html: []
    };

    for(let arr in arrayOfArrays){
        const splitArr = arrayOfArrays[arr].split(' ');
        const keptTags = splitArr.slice(0, maxTags.value);
        const discardTags = splitArr.slice(maxTags.value + 1);
        output.data.keptTags.push(keptTags);
        output.data.discardTags.push(discardTags);

        const text =  ` `.repeat(spaces.value) + '\<' + tagName.value + '>' + keptTags.join(' ') + '\</' + tagName.value + '>';
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