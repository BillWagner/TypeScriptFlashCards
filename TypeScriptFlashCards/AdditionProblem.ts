/// <reference path="scripts/typings/jquery/jquery.d.ts" />

interface JQuery {
    tmpl(data: any): JQuery;
}

interface JQueryStatic {
    tmpl(tmplate: string, data: any): JQuery;
}

module MathProblems {
    export class AdditionProblem {
        left: number;
        right: number;
        correctAnswer: number;
        txt: HTMLInputElement;
        msg: HTMLSpanElement;

        tmplate = "${left} + ${right} = ";

        constructor(element: JQuery) {
            this.left = Math.floor(Math.random() * 25);
            this.right = Math.floor(Math.random() * 25);
            this.correctAnswer = this.left + this.right;
            var paragraph = document.createElement('p');
            var renderedProblem = $.tmpl(this.tmplate, this);
            renderedProblem.appendTo(paragraph);

            this.txt = document.createElement('input');
            this.txt.type = 'text';
            paragraph.appendChild(this.txt);

            var button = document.createElement('input');
            this.msg = document.createElement('span');
            button.type = 'button';
            button.value = "Check Answer";
            button.onclick = () => this.checkAnswer();
            paragraph.appendChild(button);
            paragraph.appendChild(this.msg);

            element.append(paragraph);
        }

        checkAnswer() {
            if (parseInt(this.txt.value) == this.correctAnswer)
                this.msg.innerHTML = "You are correct";
            else
                this.msg.innerHTML = "Please try again";
        }
    }
}
