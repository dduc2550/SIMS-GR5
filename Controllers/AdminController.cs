using Microsoft.AspNetCore.Mvc;

namespace School.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Studentlist()
        {
            return View();
        }

        public IActionResult Studentview()
        {
            return View();
        }

        public IActionResult Studentadd()
        {
            return View();
        }

        public IActionResult Studentedit()
        {
            return View();
        }

        public IActionResult Subjectlist()
        {
            return View();
        }
        public IActionResult Subjectadd()
        {
            return View();
        }
        public IActionResult Subjectedit()
        {
            return View();
        }
        public IActionResult Profile()
        {
            return View();
        }
    }
}
