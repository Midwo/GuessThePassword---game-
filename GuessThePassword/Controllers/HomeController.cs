using GuessThePassword.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GuessThePassword.Controllers
{
    public class HomeController : Controller
    {
        private GuessThePassword_LastGamesContext db = new GuessThePassword_LastGamesContext();
        public ActionResult Index()
        {
            return View(db.LastGames.OrderByDescending(s => s.ResultsID).Take(5).ToList());
        }

        public ActionResult NewResult(GuessThePassword_LastGames std)
        {
            std.Date = DateTime.Now.ToString();
            db.LastGames.Add(std);
            db.SaveChanges();
            string message = "SUCCESS";
            return Json(new { Message = message, JsonRequestBehavior.AllowGet });
        }

        public JsonResult GetLast5Games(string id)
        {
            List<GuessThePassword_LastGames> records = new List<GuessThePassword_LastGames>();
            records = db.LastGames.OrderByDescending(s => s.ResultsID).Take(5).ToList();
            return Json(records, JsonRequestBehavior.AllowGet);
        }
    }
}