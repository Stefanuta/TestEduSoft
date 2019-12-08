using BethanysPieShop.Models;
using BethanysPieShop.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BethanysPieShop.Controllers
{
   public class HomeController : Controller
   {
     
      // GET: /<controller>/
      
      public IActionResult Index()
      {
         return View();
      }


      //public IActionResult Details(int id)
      //{
      //   var pie = _pieRepository.GetPieById(id);
      //   if (pie == null) {
      //      return NotFound();
      //   }
      //   return View(pie);
      //}
   }
}
