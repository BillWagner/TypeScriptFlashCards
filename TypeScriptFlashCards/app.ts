/// <reference src="AdditionProblem.ts" />


window.onload = () => {
    var el = document.getElementById('content');
    var button = document.createElement('input');
    button.type = 'button';
    button.value = "Create New Problem";
    button.onclick = function () {
        var problem = new MathProblems.AdditionProblem(el);
    };
    el.appendChild(button);

};