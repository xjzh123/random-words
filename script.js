document.addEventListener('alpine:init', () => {
    Alpine.data('app', function () {
        let x = this
        function App () {
            this.words_list = all_words.split('\n')
            this.length = this.words_list.length
            this.words = x.$persist(null)
            this.getRandomWord = function() {
                return this.words_list[Math.floor(Math.random() * this.length)]
            }
            this.getWords = function(words_per_line, lines) {
                let result = []
                for (let i = 0; i < lines; i++) {
                    let line = []
                    for (let j = 0; j < words_per_line; j++) {
                        let word = this.getRandomWord()
                        line.push(word)
                    }
                    result.push(line)
                }
                return result
            }
            this.init = function() {
                if (!this.words) {
                    this.words = this.getWords(4, 4)
                }
            }
        }
        return new App()
    })
})
