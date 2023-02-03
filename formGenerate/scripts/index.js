import { jsonReturn } from './jsonReturn.js';

window.onload = () => {
    let selectForm = document.getElementById("selectForm");
    
    let root = document.getElementById("root");

    selectForm.addEventListener("change", () => {
        let value = selectForm.value;
        jsonReturn(value, root);
    });

};
