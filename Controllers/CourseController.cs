using Microsoft.AspNetCore.Mvc;

namespace School.Controllers
{
    public class CourseController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
