using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace GuessThePassword.Models
{
    public class GuessThePassword_LastGamesContext : DbContext
    {
        public DbSet<GuessThePassword_LastGames> LastGames { get; set; }
    }
}