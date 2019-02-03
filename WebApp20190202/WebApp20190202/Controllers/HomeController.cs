using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApp20190202.Controllers {
    public class HomeController : Controller {
        private static log4net.ILog logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public ActionResult Index() {
            logger.Info("Start Index");
            ViewBag.Title = "File Box Page";

            logger.Info("End Index");
            return View();
        }
    }
}
