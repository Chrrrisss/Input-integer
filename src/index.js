module.exports = input_Integer

const sheet = new CSSStyleSheet
const theme = get_theme()
sheet.replaceSync(theme)

function input_Integer () {
    const el = document.createElement('div')
    const shadow = el.attachShadow({ mode: 'closed' })
    shadow.innerHTML = `
    <input></input>
    
    `
    shadow.adoptedStyleSheets = [sheet]

    return el 
}

function get_theme() {
    return`input {
        padding: 4px 8px;
        background-color: hsla(360, 94%, 84%, 1);
        padding: 8px 12px;
        border-radius: 8px
    }
    input:focus {
        background-color: hsla(183, 94%, 39%, 1);

    }
    `
}
