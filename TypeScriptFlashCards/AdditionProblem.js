var MathProblems;
(function (MathProblems) {
    var AdditionProblem = (function () {
        function AdditionProblem(element) {
            var left = Math.floor(Math.random() * 25);
            var right = Math.floor(Math.random() * 25);
            var correctAnswer = left + right;

            var paragraph = document.createElement('p');
            paragraph.innerHTML = left.toString() + " + " + right.toString() + " = ";

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

            element.appendChild(paragraph);
        }
        return AdditionProblem;
    })();
    MathProblems.AdditionProblem = AdditionProblem;
})(MathProblems || (MathProblems = {}));
//# sourceMappingURL=AdditionProblem.js.map
