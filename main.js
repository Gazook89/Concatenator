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

        let tag = [];
        if(tagName.value.length > 0){
            tag = [
                '\<' + tagName.value + '>',
                '\</' + tagName.value + '>'
            ]
        } else {
            tag = ['',''] 
        }

        const text =  ` `.repeat(spaces.value) + tag[0] + keptTags.join(' ') + tag[1];
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
