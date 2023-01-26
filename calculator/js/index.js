import mathCallback from './logic.js'
import { runThemeController } from './common/theme.js'

window.onload = () => {
    const buttons = [ ...document.querySelectorAll('[data-container="action-button"]') ] //Массив с кнопками калькулятора

    const callback = mathCallback()

    buttons.forEach((button) => {
        button.addEventListener('click', () => {// событие клика по кнопкам
            
            const operation = button.innerText.trim()
            callback(operation)
        })
    })

    runThemeController()
}