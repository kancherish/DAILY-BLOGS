import conf from "../conf/conf";
import { Storage,Databases,Client, Query, ID } from "appwrite";

export class BackDB{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
                .setEndpoint(conf.appWriteUrl.replace("'",""))
                .setProject(conf.projectId.replace("'",""))
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({title,slug,content,featuredImage,status,userId,userName}){
            try {
                return await this.databases.createDocument(
                    conf.dbId.replace("'",""),
                    conf.collectionId.replace("'",""),
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId,
                        userName,
                    }
                )
            } catch (error) {
                console.log("APPWRITE:: INSERTION ERROR:: "+error);
                throw error;
            }
    }

    async updatePost(slug,{title,content,featuredImage,status,userId}){
        try {
            return await this.databases.updateDocument(
                conf.dbId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("APPWRITE:: UPDATION ERROR:: "+error);
            throw error;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.dbId,
                conf.collectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("APPWRITE:: DELETION ERROR:: "+error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.dbId,
                conf.collectionId,
                slug
            )
        } catch (error) {
            console.log("APPWRITE:: GET POST ERROR:: "+error);
            return false;
        }
    }
    
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.dbId.replace("'",""),
                conf.collectionId.replace("'",""),
                queries
            )
        } catch (error) {
            console.log("APPWRITE:: GET POSTS ERROR:: "+error);
            return false;
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.bucketId.replace("'",""),
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("APPWRITE:: upload ERROR:: "+error);
            return false;
        }
    }

    async deleteFile(id){
        try {
            return await this.bucket.deleteFile(
                conf.bucketId,
                id
            )
            return true
        } catch (error) {
            console.log("APPWRITE:: DELETE ERROR:: "+error);
            return false;
        }
    }

     getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                
                conf.bucketId.replace("'",""),
                fileId
            )
        } catch (error) {
            console.log("APPWRITE:: file preview ERROR:: "+error);
            return false;
        }
    }



}

const backDB = new BackDB();

export default backDB;