﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizIT.Models
{
    public class ApplicationUser : IdentityUser
    {
        public int Points { get; set; }
    }
}
