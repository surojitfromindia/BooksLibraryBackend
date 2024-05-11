import { Request, Response } from "express";
import { CheckoutModel, ICheckout } from "../models/Checkout.Model";

const createCheckout = async (req: Request, res: Response) => {
  try {
    const RequestBody = req.body;
    const payload: ICheckout = {
      member_id: RequestBody.member_id,
      issue_date: RequestBody.issue_date,
      due_date: RequestBody.due_date,
      has_returned: false,
      returned_date: RequestBody.returned_date,
      book_list: RequestBody.book_list,
    };
    const newCheckout = await CheckoutModel.create(payload);
    res.status(201).send(newCheckout);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

const getAllCheckouts = async (req: Request, res: Response) => {
  try {
    const checkouts = await CheckoutModel.find()
      // .populate("members_details")
      .populate("book_list.book_details")
      .lean();
    res.status(200).send(checkouts);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
const deleteCheckouts= async(req: Request, res: Response)=> {
  try{
const delId= req.params.id;
const del= await CheckoutModel.deleteOne({_id: delId});
res.status(202).send(del);
  }
  catch(error){
res. status(404).send(error.message);
  }
};

export { createCheckout, getAllCheckouts, deleteCheckouts };
