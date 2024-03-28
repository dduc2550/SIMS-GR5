using Microsoft.AspNetCore.Mvc;

namespace School.Controllers
{
    public class RegisterController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
