using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Newtonsoft.Json;
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
            var containerName = "group-info-blob";
            var blobName = data.GroupId;

            CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
            CloudBlobContainer container = blobClient.GetContainerReference(containerName);
            CloudBlockBlob blockBlob = container.GetBlockBlobReference(blobName);
            var content = blockBlob.DownloadText();
            logger.Debug(content);
            var jsonContent = JsonConvert.DeserializeObject<GroupInfoCarrier>(content);

            if (CheckEmail(data, jsonContent)) {
                data.ActionResult = "checkOK";
                data.Uploadfiles = jsonContent.Uploadfiles;
            }

            logger.Info("End CheckLogin");
            return data;
        }

        private bool CheckEmail(JsonCarrier data, GroupInfoCarrier blob) {
            logger.Debug("Start CheckEmail" + data.EmailAddress);
            var result = false;
            var emailList = blob.Emails.Split(new string[] {","}, StringSplitOptions.None);

            foreach(string email in emailList) {
                logger.Debug(email);
                if (data.EmailAddress.Equals(email.Trim())) {
                    result = true;
                    break;
                }
            }
            logger.Debug("End CheckEmail");
            return result;
        }
    }

    public class GroupInfoCarrier {
        [JsonProperty(PropertyName = "uploadfiles")]
        public string Uploadfiles { get; set; }

        [JsonProperty(PropertyName = "emails")]
        public string Emails { get; set; }
    }
}