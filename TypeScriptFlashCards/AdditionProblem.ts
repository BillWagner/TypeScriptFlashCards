/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="MathProblem.ts" />

interface JQuery {
    tmpl(data: any): JQuery;
}

interface JQueryStatic {
    tmpl(tmplate: string, data: any): JQuery;
}

module MathProblems {
    export class AdditionProblem extends MathProblem {

        constructor(element: JQuery) {
            super();
            var left = Math.floor(Math.random() * 25);
            var right = Math.floor(Math.random() * 25);
            var tmplate = "${left} + ${right} = ";

            var renderedProblem = $.tmpl(tmplate, this);
            super.buildHtml(element, renderedProblem, left+right);
        }
    }
}
