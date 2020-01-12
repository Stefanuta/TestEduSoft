using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizIT.ViewModels
{
    public class CourseViewModel
    {
        [JsonProperty("course")]
        public Course Course { get; set; }

    }
}
