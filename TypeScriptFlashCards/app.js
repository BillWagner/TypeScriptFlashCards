var AdditionProblem = (function () {
    function AdditionProblem(element) {
    }
    return AdditionProblem;
})();

window.onload = function () {
    var el = document.getElementById('content');
    var button = document.createElement('input');
    button.type = 'button';
    button.value = "Create New Problem";
    button.onclick = function () {
        var problem = new AdditionProblem(el);
    };
    el.appendChild(button);
};
//# sourceMappingURL=app.js.map
