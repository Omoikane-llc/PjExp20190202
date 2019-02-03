using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApp20190202.Models {
    public class JsonCarrier {
        [JsonProperty(PropertyName = "actionType")]
        public string ActionType { get; set; }

        [JsonProperty(PropertyName = "groupId")]
        public string GroupId { get; set; }

        [JsonProperty(PropertyName = "emailAddress")]
        public string EmailAddress { get; set; }

        [JsonProperty(PropertyName = "actionResult")]
        public string ActionResult { get; set; }
        
        [JsonProperty(PropertyName = "errorMessage")]
        public string ErrorMessage { get; set; }
    }
}