using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizIT.ViewModels
{
    public class Course
    {
       [JsonProperty("course_id")]
        public string Id { get; set; }
        [JsonProperty("name")]
        public string Title { get; set; }
        [JsonProperty("author")]
        public string Author { get; set; }
        [JsonProperty("source")]
        public string Image { get; set; }
        [JsonProperty("points")]
        public string Points { get; set; }
        [JsonProperty("description")]
        public string Description { get; set; }
    }
}
