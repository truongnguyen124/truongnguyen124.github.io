var currect_ques = 0
var score = 0
var quiz = [
    {
        question: "What was the first emoticon ever used?",
        option: [
            { opt: "😀", isCorrect: false },
            { opt: "🙂", isCorrect: true },
            { opt: "🙁", isCorrect: false },
            { opt: "😛", isCorrect: false },
        ],
        answer: false,
    },
    {
        question: "What technology is used to record cryptocurrency transactions?",
        option: [
            { opt: "Digital Wallet", isCorrect: false },
            { opt: "Mining", isCorrect: false },
            { opt: "Blockchain", isCorrect: true },
            { opt: "Token", isCorrect: false },
        ],
        answer: false,
    },
    {
        question: "What tool would you use to reduce the digital image size?",
        option: [
            { opt: "Filter", isCorrect: false },
            { opt: "Brush", isCorrect: false },
            { opt: "Rotate", isCorrect: false },
            { opt: "Crop", isCorrect: true },
        ],
        answer: false,
    },
    {
        question: "Why is big data so important?",
        option: [
            { opt: "Because it is structured", isCorrect: false },
            { opt: "Because it may be analyzed to reveal patterns and trends", isCorrect: true },
            { opt: "Because of its complexity", isCorrect: false },
            { opt: "Because of its size", isCorrect: false },
        ],
        answer: false,
    },
    {
        question: "What kind of malware is deisgned to take advantage of security hole before it is known?",
        option: [
            { opt: "Zero-day exploit", isCorrect: true },
            { opt: "Virus", isCorrect: false },
            { opt: "Ransomware", isCorrect: false },
            { opt: "Trojan horse", isCorrect: false },
        ],
        answer: false,
    }
]

function reset(){
    currect_ques = 0
    score = 0
    $.each(quiz, function (index, value) {
        value.answer  = false
    })
}

// Update quiz
function updateQuiz() {
    //Point check
    if(currect_ques == quiz.length){
        if(score==5){
            alert('Congrats you won!!')
            reset()
        } else {
            alert('Try again next time')
            reset()
        }
    }

    $('.progress-bar').empty()
    $('.question').empty()
    $('fieldset').empty()

    // Progress bar
    $.each(quiz, function (index, value) {
        if (currect_ques == index) {
            $('.progress-bar').append(`<i class="far fa-dot-circle"></i>`)
        }
        else {
            if (value.answer) {
                $('.progress-bar').append(`<i class="fas fa-circle"></i>`)
            } else {
                $('.progress-bar').append(`<i class="far fa-circle"></i>`)
            }
        }
    })

    // Get question
    $('.question').text(quiz[currect_ques].question)

    // Get options
    $.each(quiz[currect_ques].option, function (i, o) {
        $('fieldset').append(`
            <div>
                <input type="radio" name="option-${currect_ques}" value ="${o.isCorrect}">
                <label for="option-${currect_ques}">${o.opt}</label><br>
            </div>
            `)
    })

}


$(document).ready(function () {
    updateQuiz()

    // Next button
    $('#next').click(function () {
        var answer = $(`input[name='option-${currect_ques}']:checked`).val();
        if (answer=="true") {
            quiz[currect_ques].answer = true
            score += 1
        }
        currect_ques += 1
        updateQuiz()
    })

})






