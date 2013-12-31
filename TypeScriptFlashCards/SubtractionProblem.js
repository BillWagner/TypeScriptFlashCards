/// <reference path="scripts/typings/jquery/jquery.d.ts" />
/// <reference path="MathProblem.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var MathProblems;
(function (MathProblems) {
    var SubtractionProblem = (function (_super) {
        __extends(SubtractionProblem, _super);
        function SubtractionProblem(element) {
            _super.call(this);
            this.left = Math.floor(Math.random() * 25);
            this.right = Math.floor(Math.random() * 25);
            var tmplate = "${left} - ${right} = ";

            var renderedProblem = $.tmpl(tmplate, this);
            _super.prototype.buildHtml.call(this, element, renderedProblem, this.left - this.right);
        }
        return SubtractionProblem;
    })(MathProblems.MathProblem);
    MathProblems.SubtractionProblem = SubtractionProblem;
})(MathProblems || (MathProblems = {}));
//# sourceMappingURL=SubtractionProblem.js.map
