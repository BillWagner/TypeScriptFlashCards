/// <reference path="scripts/typings/jquery/jquery.d.ts" />

var MathProblems;
(function (MathProblems) {
    var AdditionProblem = (function () {
        function AdditionProblem(element) {
            var _this = this;
            this.tmplate = "${left} + ${right} = ";
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
            button.onclick = function () {
                return _this.checkAnswer();
            };
            paragraph.appendChild(button);
            paragraph.appendChild(this.msg);

            element.append(paragraph);
        }
        AdditionProblem.prototype.checkAnswer = function () {
            if (parseInt(this.txt.value) == this.correctAnswer)
                this.msg.innerHTML = "You are correct";
            else
                this.msg.innerHTML = "Please try again";
        };
        return AdditionProblem;
    })();
    MathProblems.AdditionProblem = AdditionProblem;
})(MathProblems || (MathProblems = {}));
//# sourceMappingURL=AdditionProblem.js.map
