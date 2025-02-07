using Microsoft.AspNetCore.Mvc;
using Mission05Assignment.Models;
using System.Diagnostics;

namespace Mission05Assignment.Controllers
{
    public class HomeController : Controller
    {


        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult RequestTraining()
        {
            return View("RequestTraining");
        }

        [HttpPost]
        public IActionResult RequestTraining(Request response) 
        {
            return View("Confirmation");
        }


    }
}
