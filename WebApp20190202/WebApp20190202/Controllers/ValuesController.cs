using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApp20190202.Models;

namespace WebApp20190202.Controllers {
    public class ValuesController : ApiController {
        private static log4net.ILog logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        // GET api/values
        public IEnumerable<string> Get() {
            logger.Info("Start Get");
            logger.Info("End Get");
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id) {
            return "value";
        }

        // POST api/values
        public JsonCarrier Post(JsonCarrier data) {
            logger.Info("Start Post " + data.ActionType ?? "action not defined");

            var act = data.ActionType;
            JsonCarrier res = null;

            switch (act) {
                case "login_check":
                    var loginCheck = new BlobAccessGroupInfo();
                    res = loginCheck.CheckLogin(data);
                    break;
                default:
                    data.ErrorMessage = "invalid actionType " + act;
                    res = data;
                    break;
            }

            logger.Info("End Post");
            return res;
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value) {
        }

        // DELETE api/values/5
        public void Delete(int id) {
        }
    }
}
