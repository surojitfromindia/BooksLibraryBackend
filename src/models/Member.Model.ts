import * as mongoose from "mongoose";

// Define a typescript type
type IMember = {
  first_name: string;
  last_name: string;
  dob: Date;
  join_date: Date;
  gender: "M" | "F" | "O";
  status: "A" | "D";
  member_type: "regular" | "premium";
  contact_number: string;
  email?: string;
};

const MemberSchema = new mongoose.Schema<IMember>({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true, 
  },
  gender:{
    type: String,
    required: true,
    enum: ["M","F","O"]
  },
  contact_number:{
    type: String,
    required: true,
  },
  dob:{
    type: Date,
    required: true,
  },
  join_date:{
    type: Date,
    required: true,
  },
  status:{
    type: String,
    required: true,
    enum: ["A","D"],
  },
member_type:{
  type: String,
    required: true,
    enum: ["regular","premium"],
},
email:{
  type: String,
},
});
const MemberModel = mongoose.model<IMember>("members",MemberSchema);

export {MemberModel};
export type {IMember};