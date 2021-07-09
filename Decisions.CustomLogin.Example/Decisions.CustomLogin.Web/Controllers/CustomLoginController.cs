using Decisions.Web.Core.CustomLogin;
using Decisions.Web.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Decisions.UnitTests.Web.Core.Controllers
{
    public class CustomLoginController : Controller, ICustomLoginPageProvider
    {
        public string LoginLayoutPath { get => "~/VIEWS/CUSTOMLOGIN/CUSTOMLOGINLAYOUT.CSHTML"; set { } }

        [AllowAnonymous]
        public IActionResult RedirectToCustomLogin(LoginViewModel loginViewModel)
        {
            return View("CustomLogin", loginViewModel);
        }
    }
}
