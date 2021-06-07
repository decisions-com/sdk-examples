using Decisions.Web.Core.Models;
using Decisions.Web.Core.Models.Account;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Decisions.UnitTests.Web.Core.Controllers
{
    public class CustomLoginController : Controller, ICustomLoginPageProvider
    {
        [AllowAnonymous]
        public IActionResult RedirectToCustomLogin(LoginViewModel loginViewModel)
        {
            return View("CustomLogin", loginViewModel);
        }
    }
}
