using FirstServerCall.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FirstServerCall.Controllers
{
    public class CustomerController : Controller
    {
        // GET: Customer
        public ActionResult Index()
        {
            NorthwindEntities OE = new NorthwindEntities();
            var cust = OE.Customers.ToList();
            return Json(cust, JsonRequestBehavior.AllowGet);
        }
    }
}