/// <reference path="scripts/typings/jquery/jquery.d.ts" />

var MathProblems;
(function (MathProblems) {
    var AdditionProblem = (function () {
        function AdditionProblem(element) {
            this.left = Math.floor(Math.random() * 25);
            this.right = Math.floor(Math.random() * 25);
            var correctAnswer = this.left + this.right;
            $("#AdditionProblemTemplate").tmpl(this).appendTo(element);
            return;
            var paragraph = document.createElement('p');
            paragraph.innerHTML = this.left.toString() + " + " + this.right.toString() + " = ";

            var txt = document.createElement('input');
            txt.type = 'text';
            paragraph.appendChild(txt);

            var button = document.createElement('input');
            var msg = document.createElement('span');
            button.type = 'button';
            button.value = "Check Answer";
            button.onclick = function () {
                if (parseInt(txt.value) == correctAnswer)
                    msg.innerHTML = "You are correct";
                else
                    msg.innerHTML = "Please try again";
            };
            paragraph.appendChild(button);
            paragraph.appendChild(msg);

            element.append(paragraph);
        }
        return AdditionProblem;
    })();
    MathProblems.AdditionProblem = AdditionProblem;
})(MathProblems || (MathProblems = {}));
//# sourceMappingURL=AdditionProblem.js.map
