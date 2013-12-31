/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="AdditionProblem.ts" />
/// <reference path="SubtractionProblem.ts" />


$(document).ready(() => {
    var el = $('#content');
    var index = 0;
    var button = $("<input></input>")
        .val("Create New Problem")
        .attr("type", "button")
        .bind("click", function () {
        var problem = (index++ % 2 === 1) ? new MathProblems.AdditionProblem(el) : new MathProblems.SubtractionProblem(el);
    });
    el.append(button);
}
);