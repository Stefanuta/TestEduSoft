//var AddBookDetails = (function () {

//    function _addBookDetails(id) {
//        var currentId = window.location.search.replace("?", "");
//        $.ajax({
//            type: "POST",
//            url: "Home/Details" + id,
//            data: id,
//            contentType: "application/json; charset=utf-8",
//            dataType: "json",
//            success: OnSuccess(id),
//            failure: function (response) {
//                alert(response);
//            }
//        });

//    }

//    function OnSuccess(id) {
//        var currentCourse = Courses.getCurrentCourse(id);

//        $("#imagine").attr("src", currentCourse.source);
//        $("#bookTitle").text('"' + currentCourse.name + '"');
//        $("#bookAuthor").text(currentCourse.author);
//        $("#bookDescription").text(currentCourse.description);
//    }

//    return {
//        bookDetails: function () {
//            _addBookDetails();
//        }
//    };


//})();