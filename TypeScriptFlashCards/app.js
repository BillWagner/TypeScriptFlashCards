/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="AdditionProblem.ts" />
$(document).ready(function () {
    var el = $('#content');
    var button = $("<input></input>").val("Create New Problem").attr("type", "button").bind("click", function () {
        var problem = new MathProblems.AdditionProblem(el);
    });
    el.append(button);
});
//# sourceMappingURL=app.js.map
