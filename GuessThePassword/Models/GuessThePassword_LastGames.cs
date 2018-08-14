using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace GuessThePassword.Models
{
    public class GuessThePassword_LastGames
    {
        [Display(Name ="Numer")]
        [Key]
        public int ResultsID { get; set; }
        [Display(Name = "Data ostatniej gry")]
        [Required]
        public string Date { get; set; }

    }
}