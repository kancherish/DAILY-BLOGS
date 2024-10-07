const conf = {
    appWriteUrl : String(process.env.PUBLIC_APPWRITE_URL),
    projectId : String(process.env.PUBLIC_PROJECT_ID),
    dbId : String(process.env.PUBLIC_DB_ID),
    collectionId:String(process.env.PUBLIC_COLLECTION_ID),
    bucketId : String(process.env.PUBLIC_BUCKET_ID)
}

export default conf;