class Quiz extends HTMLElement {
    constructor() {
        super();
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
    }

    connectedCallback() {
        this.render();
    }

    setChapter(chapter) {
        // 根据章节名称构建题库变量名
        const questionsVarName = `${chapter}Questions`;
        
        // 检查题库是否存在
        if (typeof window[questionsVarName] === 'undefined') {
            alert(`错误：找不到${chapter}章节的题库！`);
            this.remove();
            return;
        }

        // 从题库中获取题目
        const allQuestions = window[questionsVarName];
        if (!Array.isArray(allQuestions) || allQuestions.length === 0) {
            alert(`错误：${chapter}章节的题库格式不正确或为空！`);
            this.remove();
            return;
        }

        // 随机选择10道题
        this.questions = this.getRandomQuestions(allQuestions, 10);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.render();
        this.showQuestion();
    }

    getRandomQuestions(questions, count) {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(count, questions.length));
    }

    render() {
        this.innerHTML = `
            <div class="quiz-modal">
                <div class="quiz-content">
                    <div class="quiz-header">
                        <h2>章节测试</h2>
                        <span class="close-btn">&times;</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress" id="quizProgress"></div>
                    </div>
                    <div id="quizContainer" class="quiz-container"></div>
                    <div class="quiz-footer">
                        <button id="submitQuizBtn" class="btn">提交答案</button>
                        <button id="nextQuizBtn" class="btn" style="display: none;">下一题</button>
                    </div>
                    <div id="quizResult" class="quiz-result" style="display: none;"></div>
                </div>
            </div>
            <style>
                .quiz-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .quiz-content {
                    background-color: white;
                    padding: 20px;
                    border-radius: 10px;
                    width: 90%;
                    max-width: 800px;
                    max-height: 90vh;
                    overflow-y: auto;
                }
                .quiz-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .close-btn {
                    font-size: 24px;
                    cursor: pointer;
                }
                .progress-bar {
                    width: 100%;
                    height: 20px;
                    background-color: #f0f0f0;
                    border-radius: 10px;
                    margin: 20px 0;
                    overflow: hidden;
                }
                .progress {
                    width: 0%;
                    height: 100%;
                    background-color: #4CAF50;
                    transition: width 0.3s ease;
                }
                .quiz-container {
                    margin: 20px 0;
                }
                .question {
                    margin-bottom: 30px;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                }
                .options {
                    list-style: none;
                    padding: 0;
                }
                .option {
                    margin: 10px 0;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                .option:hover {
                    background-color: #f0f0f0;
                }
                .option.selected {
                    background-color: #e3f2e3;
                    border-color: #4CAF50;
                }
                .option.correct {
                    background-color: #dff0d8;
                    border-color: #3c763d;
                }
                .option.incorrect {
                    background-color: #f2dede;
                    border-color: #a94442;
                }
                .btn {
                    padding: 10px 20px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin: 5px;
                }
                .btn:hover {
                    background-color: #45a049;
                }
                .quiz-footer {
                    text-align: center;
                    margin-top: 20px;
                }
                .explanation {
                    margin-top: 20px;
                    padding: 10px;
                    background-color: #f8f9fa;
                    border-radius: 4px;
                }
                .quiz-result {
                    text-align: center;
                    padding: 20px;
                    margin-top: 20px;
                    background-color: #f8f9fa;
                    border-radius: 8px;
                }
                .question-content {
                    margin: 15px 0;
                }
                .question-content pre {
                    background-color: #2d2d2d;
                    border-radius: 5px;
                    padding: 15px;
                    margin: 10px 0;
                    overflow-x: auto;
                }
                .question-content code {
                    font-family: 'Fira Code', 'Consolas', monospace;
                    font-size: 14px;
                }
                .option pre {
                    background-color: #2d2d2d;
                    border-radius: 4px;
                    padding: 10px;
                    margin: 5px 0;
                }
                .option.selected pre {
                    background-color: #3a3a3a;
                }
                .explanation-content {
                    margin-top: 10px;
                }
                .explanation-content pre {
                    background-color: #2d2d2d;
                    border-radius: 4px;
                    padding: 10px;
                    margin: 10px 0;
                }
            </style>
        `;

        // 添加事件监听器
        this.querySelector('.close-btn').addEventListener('click', () => {
            this.remove();
        });

        this.querySelector('#submitQuizBtn').addEventListener('click', () => {
            this.submitAnswer();
        });

        this.querySelector('#nextQuizBtn').addEventListener('click', () => {
            this.nextQuestion();
        });
    }

    showQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.querySelector('#quizProgress').style.width = `${progress}%`;

        let questionText = question.question;
        // 检查问题是否包含代码
        if (questionText.includes('```cpp') || this.containsCode(questionText)) {
            questionText = this.formatCodeInQuestion(questionText);
        }

        let html = `
            <div class="question">
                <h3>问题 ${this.currentQuestionIndex + 1}:</h3>
                <div class="question-content">${questionText}</div>
                <ul class="options">
        `;

        question.options.forEach((option, index) => {
            // 检查选项是否包含代码
            let optionText = option;
            if (optionText.includes('```cpp') || this.containsCode(optionText)) {
                optionText = this.formatCodeInQuestion(optionText);
            }
            html += `
                <li class="option" data-index="${index}">
                    ${String.fromCharCode(65 + index)}. ${optionText}
                </li>
            `;
        });

        html += `</ul></div>`;
        this.querySelector('#quizContainer').innerHTML = html;

        // 触发代码高亮
        if (window.Prism) {
            Prism.highlightAll();
        }

        // 添加选项点击事件
        this.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', () => {
                this.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
            });
        });
    }

    // 检查文本是否包含代码
    containsCode(text) {
        return text.includes('int') || text.includes('void') || text.includes('cout') || 
               text.includes('cin') || text.includes('for') || text.includes('while') ||
               text.includes('#include') || text.includes('return') || text.includes('char') ||
               text.includes('float') || text.includes('double') || text.includes('class') ||
               text.includes('struct') || text.includes('printf') || text.includes('scanf');
    }

    // 格式化问题中的代码
    formatCodeInQuestion(text) {
        if (text.includes('```cpp')) {
            // 已经包含Markdown代码块标记
            return text.replace(/```cpp([\s\S]*?)```/g, 
                '<pre><code class="language-cpp">$1</code></pre>');
        } else {
            // 自动检测并包装代码
            const codeRegex = /((?:int|void|cout|cin|for|while|#include|return|char|float|double|class|struct|printf|scanf)[\s\S]*?;)/g;
            return text.replace(codeRegex, 
                '<pre><code class="language-cpp">$1</code></pre>');
        }
    }

    submitAnswer() {
        const selectedOption = this.querySelector('.option.selected');
        if (!selectedOption) {
            alert('请选择一个答案！');
            return;
        }

        const userAnswer = parseInt(selectedOption.dataset.index);
        const correctAnswer = this.questions[this.currentQuestionIndex].answer;
        this.userAnswers.push(userAnswer);

        this.querySelectorAll('.option').forEach(option => {
            const optionIndex = parseInt(option.dataset.index);
            if (optionIndex === correctAnswer) {
                option.classList.add('correct');
            } else if (optionIndex === userAnswer && userAnswer !== correctAnswer) {
                option.classList.add('incorrect');
            }
        });

        // 显示答案解释
        let explanation = this.questions[this.currentQuestionIndex].explanation;
        if (explanation.includes('```cpp') || this.containsCode(explanation)) {
            explanation = this.formatCodeInQuestion(explanation);
        }
        
        this.querySelector('#quizContainer').innerHTML += `
            <div class="explanation">
                <strong>解释：</strong>
                <div class="explanation-content">${explanation}</div>
            </div>
        `;

        // 触发新添加内容的代码高亮
        if (window.Prism) {
            Prism.highlightAll();
        }

        if (userAnswer === correctAnswer) {
            this.score++;
        }

        this.querySelector('#submitQuizBtn').style.display = 'none';
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.querySelector('#nextQuizBtn').style.display = 'inline-block';
        } else {
            this.showResult();
        }
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.showQuestion();
        this.querySelector('#submitQuizBtn').style.display = 'inline-block';
        this.querySelector('#nextQuizBtn').style.display = 'none';
    }

    showResult() {
        const percentage = (this.score / this.questions.length) * 100;
        const resultDiv = this.querySelector('#quizResult');
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <h2>测试结果</h2>
            <p>总题数: ${this.questions.length}</p>
            <p>正确答案: ${this.score}</p>
            <p>正确率: ${percentage.toFixed(2)}%</p>
            <button class="btn" onclick="this.closest('cpp-quiz').remove()">关闭</button>
        `;
    }
}

customElements.define('cpp-quiz', Quiz); 