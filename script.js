function data() {
    let result = {}
    result.word_list = words.split('\n')
    result.len = result.word_list.length
    result.choose = function (per_line, lines) {
        let choices = []
        for (let i = 0; i < lines; i++) {
            let line = []
            for (let j = 0; j < per_line; j++) {
                let word = result.word_list[Math.floor(Math.random() * result.len)]
                line.push(word)
            }
            line.id = Math.random()
            choices.push(line)
        }
        return choices
    }
    if (localStorage['words']) {
        result.chosen = JSON.parse(localStorage['words'])
    } else {
        localStorage['words'] = JSON.stringify(result.choose(4, 4))
        result.chosen = JSON.parse(localStorage['words'])
    }
    return result
}

data = data()
