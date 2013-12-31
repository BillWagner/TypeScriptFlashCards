/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="MathProblem.ts" />

module MathProblems {
    export class SubtractionProblem extends MathProblem {
        left: number;
        right: number;

        constructor(element: JQuery) {
            super();
            this.left = Math.floor(Math.random() * 25);
            this.right = Math.floor(Math.random() * 25);
            var tmplate = "${left} - ${right} = ";

            var renderedProblem = $.tmpl(tmplate, this);
            super.buildHtml(element, renderedProblem, this.left - this.right);
        }
    }
}
 