using Microsoft.AspNetCore.Mvc;

namespace EducationalService.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthorizationController : Controller
    {
        [HttpGet]
        public IActionResult Login()
        {
            return Ok();
        }
    }
}
