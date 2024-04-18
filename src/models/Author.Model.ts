import {Schema,model} from "mongoose";

type IAuthor = {
    first_name: string;
    last_name: string;
    status: "A" | "D";
    email: string;
};
const AuthorSchema = new Schema<IAuthor>({
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true, 
    },
    status:{
      type: String,
      required: true,
      enum: ["A","D"],
    },
    email:{
      type: String,
      required: true
    },
  });
  const AuthorModel = model<IAuthor>("authors",AuthorSchema);
  
  export {AuthorModel};
  export type {IAuthor};