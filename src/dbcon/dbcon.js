const {name,password}=process.env;
export const  Dbcon= "mongodb+srv://"+name+":"+password+"@cluster0.7zwsahn.mongodb.net/ContactUs?retryWrites=true&w=majority"