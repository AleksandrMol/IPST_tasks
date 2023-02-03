const formGenerate = (json) => {
    return `
        <form action = "#" class = "generated-form">
        
            <h2>
                ${json.title}
            </h2>

            <p>
                ${json.description? json.description : ""}
            </p>
            ${
                json.fields.map((el) => {

                    if(el.attrs.type === "radio" || el.attrs.type === "checkbox"){
                        return `
                            <label class = "generated-label" for = ${el.attrs.name}>
                                ${el.label}
                            </label>
                            ${
                                el.attrs.variants.map((el2) => {
                                    return `
                                        <label class = "generated-box-label" for = "${el2.value}_id">
                                            ${el2.label}
                                        </label>

                                        <input class = "generated-box-input" type = ${el.attrs.type} id = "${el2.value}_id" name = ${el.attrs.name} value = ${el2.value}>
                                    `
                                }).join("")
                            }
                        `
                    }else if(el.attrs.type === "select"){
                        return `
                            <label class = "generated-label" for = ${el.attrs.name}>
                                ${el.label}
                            </label>
                            <select name=${el.attrs.name} id=${el.attrs.name}>
                                ${
                                    el.attrs.variants.map((el2) => {
                                        return `
                                             
                                            <option value = ${el2.value}>
                                                ${el2.label}
                                            </option>
                                        `
                                    }).join("")
                                }
                            </select>
                        `
                    }else if(el.attrs.type === "textarea"){
                        return `
                            <label class = "generated-label" for = ${el.attrs.name}>
                                ${el.label}
                            </label>
                            <textarea class = "generated-input" id = ${el.attrs.name} name = ${el.attrs.name} type = ${el.attrs.type}></textarea>
                        `
                    }else {
                        return `
                            <label class = "generated-label" for = ${el.attrs.name}>
                                ${el.label}
                            </label>
                            <input class = "generated-input" id = ${el.attrs.name} name = ${el.attrs.name} type = ${el.attrs.type}/>
                        `
                    }
                }).join('')
            }
            
            ${
                json.buttons.map((el) => {
                    return `
                        <button onclick = "${el}Handle(event)" class = "generated-button">
                            ${el}
                        </button>
                    `
                }).join("")
            }
        </form>
    `
}

export { formGenerate };