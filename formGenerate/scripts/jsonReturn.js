import { formGenerate } from './formGenerate.js';

const jsonReturn = async (link, root) => {
    
    if(link !== "noForm") {
        let response = await fetch(link); // получаю json файл
        let json = await response.json(); // читаю json файл
        root.innerHTML = formGenerate(json);
    }else{
        root.innerHTML = '';
    }
};

export { jsonReturn }