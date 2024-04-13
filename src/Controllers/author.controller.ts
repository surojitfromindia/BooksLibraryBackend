import { Request, Response } from "express";
import { IAuthor, AuthorModel } from "../models/Author.Model";

const createAuthor = async (req: Request, res: Response) => {
  try {
    const request_body = req.body;
    const payload: IAuthor = {
      first_name: request_body.first_name,
      last_name: request_body.last_name,
      status: "A",
    };
    const newAuthor= await AuthorModel.create(payload);
    res.status(201).send(newAuthor);
  } catch (error) {
res.status(404).send(error);
  }
};
const getallAuthors= async(req: Request,res: Response)=>{
    try{
const allAuthors= await AuthorModel.find({status: "A"});
res.status(200).json(allAuthors);
    }
    catch(error){
res.status(404).json(error);
    }
};

export {createAuthor,getallAuthors};
