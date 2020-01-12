﻿var Courses = (function () {
    var _courses = [
        {
            "id": "1",
            "name": "Course 1",
            "author": "Author",
            "source": "images/1.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        },

        {
            "id": "2",
            "name": "Course 2",
            "author": "Author",
            "source": "images/2.png",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        },

        //{
        //    "id": "3",
        //    "name": "Course 3",
        //    "author": "Author",
        //    "source": "images/3.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "4",
        //    "name": "Course 4",
        //    "author": "Author",
        //    "source": "images/4.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "5",
        //    "name": "Course 5",
        //    "author": "Author",
        //    "source": "images/5.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "6",
        //    "name": "Course 6",
        //    "author": "Author",
        //    "source": "images/6.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "7",
        //    "name": "Course 7",
        //    "author": "Author",
        //    "source": "images/7.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "8",
        //    "name": "Course 8",
        //    "author": "Author",
        //    "source": "images/8.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "9",
        //    "name": "Course 9",
        //    "author": "Author",
        //    "source": "images/9.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "10",
        //    "name": "Course 10",
        //    "author": "Author",
        //    "source": "images/10.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "11",
        //    "name": "Course 11",
        //    "author": "Author",
        //    "source": "images/11.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "12",
        //    "name": "Course 12",
        //    "author": "Author",
        //    "source": "images/12.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "13",
        //    "name": "Course 13",
        //    "author": "Author",
        //    "source": "images/13.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "14",
        //    "name": "Course 14",
        //    "author": "Author",
        //    "source": "images/14.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "15",
        //    "name": "Course 15",
        //    "author": "Author",
        //    "source": "images/15.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "16",
        //    "name": "Course 16",
        //    "author": "Author",
        //    "source": "images/16.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "17",
        //    "name": "Course 17",
        //    "author": "Author",
        //    "source": "images/17.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "18",
        //    "name": "Course 18",
        //    "author": "Author",
        //    "source": "images/18.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "19",
        //    "name": "Course 19",
        //    "author": "Author",
        //    "source": "images/19.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "20",
        //    "name": "Course 20",
        //    "author": "Author",
        //    "source": "images/20.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "21",
        //    "name": "Course 21",
        //    "author": "Author",
        //    "source": "images/21.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "22",
        //    "name": "Course 22",
        //    "author": "Author",
        //    "source": "images/22.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //},

        //{
        //    "id": "23",
        //    "name": "Course 23",
        //    "author": "Author",
        //    "source": "images/23.png",
        //    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
        //}
    ];

    return {
        getCourses: function () {
            return _courses;
        },

        getCurrentCourse: function (id) {
            var i;
            for (i = 0; i < _courses.length; i++) {
                if (_courses[i].id === id) {
                    return _courses[i];
                }
            }
        }
    };
        

       
})();