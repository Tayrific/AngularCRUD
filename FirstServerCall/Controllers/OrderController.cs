using FirstServerCall.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FirstServerCall.Controllers
{
    public class OrderController : Controller
    {
        // GET: Order
        public ActionResult Index()
        {
            NorthwindEntities OE = new NorthwindEntities();
            var orders = OE.Orders.ToList();
            return Json(orders, JsonRequestBehavior.AllowGet);
        }

        //GET: by id
        public ActionResult GetByCustomerID(string id)
        {
            NorthwindEntities OE = new NorthwindEntities();
            var orders = OE.Orders.Where(Order => Order.CustomerID == id).ToList();

            return Json(orders, JsonRequestBehavior.AllowGet);
        }
    }
}