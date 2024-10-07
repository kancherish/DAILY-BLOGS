import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService{

    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl.replace("'",""))
            .setProject(conf.projectId.replace("'",""))

        this.account = new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                return this.login(email,password);
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("APPWRITE:: ACCOUNT CREATION ERROR:: "+error)
            
        }
    }

    async loginUser({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log("APPWRITE:: ACCOUNT LOGIN ERROR:: "+error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("APPWRITE:: ACCOUNT USER FETCHING ERROR:: "+error);
        }
    }

    async logoutUser(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("APPWRITE:: ACCOUNT DESTROY ERROR:: "+error)
        }
    }

}


const authService = new AuthService();

export default authService;