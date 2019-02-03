using Microsoft.WindowsAzure.Storage;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace WebApp20190202.Models {
    public class BlobAccessGroupInfo {
        private static log4net.ILog logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        CloudStorageAccount storageAccount = CloudStorageAccount.Parse(ConfigurationManager.AppSettings["StorageConnectionString"].ToString());

        public JsonCarrier CheckLogin(JsonCarrier data) {
            logger.Info("Start CheckLogin");
            logger.Debug(ConfigurationManager.AppSettings["StorageConnectionString"].ToString());
            logger.Info("End CheckLogin");
            return data;
        }

        public List<string> GetMemberList(string groupId) {
            var result = new List<string>();

            return result;
        }
    }
}