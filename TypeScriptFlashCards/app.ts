/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference src="AdditionProblem.ts" />


$(document).ready(() => {
    var el = $('#content');
    var button = document.createElement('input');
    button.type = 'button';
    button.value = "Create New Problem";
    button.onclick = function () {
        var problem = new MathProblems.AdditionProblem(el);
    };
    el.append(button);

}
    );