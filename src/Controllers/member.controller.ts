import { Request, Response } from "express";
import { IMember, MemberModel } from "models/Member.Model";
const createMember = async(req: Request, res: Response) => {
  try {
    const request_body = req.body;
    const payload: IMember = {
      first_name: request_body.first_name,
      last_name: request_body.last_name,
      dob: request_body.dob,
      join_date: request_body.join_date,
      gender: request_body.gender,
      status: "A",
      member_type: request_body.member_type,
      contact_number: request_body.contact_number,
      email: request_body.email,
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
    let allMembers = await MemberModel.find({ status: "A" });
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
