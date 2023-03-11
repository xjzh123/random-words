function data() {
    let result = {}
    result.all_words = words.split('\n')
    result.len = result.all_words.length
    result.getRandomWord = function () {
        return result.all_words[Math.floor(Math.random() * result.len)]
    }
    result.getWords2d = function (per_line, lines) {
        let choices = []
        for (let i = 0; i < lines; i++) {
            let line = []
            for (let j = 0; j < per_line; j++) {
                let word = result.getRandomWord()
                line.push(word)
            }
            line.id = Math.random()
            choices.push(line)
        }
        return choices
    }
    if (!localStorage['words']) {
        localStorage['words'] = JSON.stringify(result.getWords2d(4, 4))
    }
    result.words2d = JSON.parse(localStorage['words'])
    return result
}

data = data()
