using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
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

            logger.Info("End CheckLogin");
            return data;
        }

        public List<string> GetMemberList(string groupId) {
            var result = new List<string>();

            return result;
        }
    }
}