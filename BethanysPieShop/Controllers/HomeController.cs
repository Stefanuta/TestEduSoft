using BethanysPieShop.Models;
using BethanysPieShop.ViewModels;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using QuizIT.ViewModels;
using System.Collections.Generic;
using System.IO;
using System.Linq;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BethanysPieShop.Controllers
{
   public class HomeController : Controller
   {
     
      // GET: /<controller>/
      [HttpGet]
      public IActionResult Index()
      {
         return View();
      }

     

        [HttpGet]
        public IActionResult Details(int id)
        {
            string jsonId = id.ToString();
            CourseViewModel course = GetCourse(jsonId);

            return View("Details", course);
        }

        private List<CourseViewModel> LoadJson()
        {
            using (StreamReader r = new StreamReader("C:\\Users\\stefa\\Desktop\\soft educational\\Bethany\\BethanysPieShop\\BethanysPieShop\\ViewModels\\courses.json"))
            {
                string json = r.ReadToEnd();
                List<CourseViewModel> courses = JsonConvert.DeserializeObject<List<CourseViewModel>>(json);
                return courses;
            }
        }

        private CourseViewModel GetCourse(string id)
        {
            List<CourseViewModel> courses = LoadJson();
            foreach (var course in courses)
            {
                if(course.Course.Id == id)
                {
                    return course;
                }
            }
            return null;
        }

    }
}
