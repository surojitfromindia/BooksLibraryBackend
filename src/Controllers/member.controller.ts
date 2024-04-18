import { Request, Response } from "express";
import { IMember, MemberModel } from "../models/Member.Model";
const createMember = async(req: Request, res: Response) => {
  try {
    const RequestBody = req.body;
    const payload: IMember = {
      first_name: RequestBody.first_name,
      last_name: RequestBody.last_name,
      dob: RequestBody.dob,
      join_date: RequestBody.join_date,
      gender: RequestBody.gender,
      status: "A",
      member_type: RequestBody.member_type,
      contact_number: RequestBody.contact_number,
      email: RequestBody.email,
    };
    const newMember = new MemberModel(payload);
    const createdMember =await newMember.save();
    res.status(201).send(createdMember);
  } catch (error: unknown) {
    res.sendStatus(400);
  }
};
const getallMembers = async (req: Request, res: Response) => {
  try {
    const allMembers = await MemberModel.find({ status: "A" });
    res.status(200).send(allMembers);
  } catch (error) {
    res.status(404).send(error);
  }
};
const deleteMember = async (req: Request, res: Response) => {
  try {
    const del: string = req.params.id;
    const delMember = await MemberModel.findOneAndUpdate(
      { _id: del, status: "A" },
      { status: "D" },
      { new: true }
    );
    res.status(201).send(delMember);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getOneMember = async (req: Request, res: Response) => {
  try {
    const findId: string = req.params.id;
    const singleMember = await MemberModel.findOne({
      _id: findId,
      status: "A",
    });
    res.status(200).send(singleMember);
  } catch (error) {
    res.status(404).send(error);
  }
};

export { createMember, getallMembers, deleteMember, getOneMember };
