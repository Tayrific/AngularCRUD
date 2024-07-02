using FirstServerCall.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FirstServerCall.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult Index()
        {
            CollegeEntities OE = new CollegeEntities();
            var student = OE.Students.ToList();
            return Json(student, JsonRequestBehavior.AllowGet);
        }

        // POST: Student/Create
        [HttpPost]
        public ActionResult Create(Student student)
        {
            try
            {
                CollegeEntities OE = new CollegeEntities();
                OE.Students.Add(student);
                OE.SaveChanges();
                return Json(new { success = true });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }


        public ActionResult Details(int id)
        {
            
            // Retrieve student details from database based on id
            CollegeEntities OE = new CollegeEntities();
            var student = OE.Students.FirstOrDefault(s => s.StudentID == id);
            Console.WriteLine($"{id}");

            if (student == null)
            {
                Console.WriteLine($"Student with ID {id} not found.");
                return HttpNotFound(); 
            }
            return Json(student, JsonRequestBehavior.AllowGet);
        }

        [HttpDelete]
        public ActionResult Delete(int id)
        {
            // Logic to delete student with given ID from database
            CollegeEntities OE = new CollegeEntities();
            var student = OE.Students.FirstOrDefault(s => s.StudentID == id);

            if (student == null)
            {
                return HttpNotFound(); // or appropriate error response
            }

            OE.Students.Remove(student);
            OE.SaveChanges();

            return Json(new { success = true, message = "Student deleted successfully." }, JsonRequestBehavior.AllowGet);
        }
    }
}