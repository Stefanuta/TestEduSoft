var AddCourses = (function () {
    function _addCourses() {
        var i;
        var course = Courses.getCourses();
        for (i = 0; i < course.length; i++) {
            if (i % 4 === 0) {
                $("#courses").append(CreateRows.createTableRow());
            }
            $($("#courses").children()[$("#courses").children().length - 1]).append(CreateRows.AddCourse(course[i]));

        }
    }

    me = function () { };

    me.init = function () {
        _init();
    };

    function _init() {        _addCourses();
    }

    return me;

})();
