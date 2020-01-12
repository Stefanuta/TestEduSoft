
var CreateRows = (function () {

    function _createCard(course) {
        var link = $("<a></a>").attr({ "target": "_blank", "href": "Home/Details/" + course.id });
       

        var block = $("<div></div").addClass("card").css("width", " 18rem;");
        link.append(block);
        var image = $("<img>").addClass("card-img-top imageCard").attr({ "src": course.source, "alt": course.name });
        block.append(image);
        block.click("");
        var cardBody = $("<div></div").addClass("card-body").append($("<p></p>").addClass("card-text").text(course.name));
        cardBody.append($("<p></p>").addClass("card-text").text(course.author));
        block.append(cardBody);

        return link;
    }

    function _createRow() {
        var row = $("<div></div>").addClass("row");
        return row;
    }

    function _createCell(course) {
        var cell = $("<div></div>").addClass("col-sm3");
        cell.append(_createCard(course));
        return cell;
    }

    me = function () { };

    me.createTableRow = function () {
        return _createRow();
    };

    me.AddCourse = function (course) {
        return _createCell(course);
    };

    return me;

})();


