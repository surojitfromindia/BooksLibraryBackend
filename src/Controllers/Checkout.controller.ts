import { CheckoutModel } from "../models/Checkout.Model";
import { BooksModel } from "../models/Books.Model";

const createCheckout = async (req, res) => {
  try {
    const RequestBody = req.body;
    const payload = {
      member_id: RequestBody.member_id,
      issue_date: RequestBody.issue_date,
      due_date: RequestBody.due_date,
      has_returned: false,
      returned_date: RequestBody.returned_date,
      book_list: RequestBody.book_list,
    };
    const newCheckout = await CheckoutModel.create(payload);

    const bookList = newCheckout.book_list;
    // update each book borrowed_stock
    for await (const book of bookList) {
      const bookId = book.book_id;
      const copies = book.copies;
      await BooksModel.findOneAndUpdate(
        {
          _id: bookId,
          status: "A",
        },
        {
          $inc: { borrowed_stock: copies, available_stock: -copies },
        },
      );
    }

    res.status(201).json(newCheckout);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getAllCheckouts = async (req, res) => {
  try {
    const checkouts = await CheckoutModel.find()
      .populate("member_details")
      .populate("book_list.book_details")
      .lean();
    res.status(200).json(checkouts);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export  {
    createCheckout,
    getAllCheckouts,
}