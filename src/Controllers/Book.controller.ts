import { Request, Response } from "express";
import { BooksModel, IBook } from "../models/Books.Model";

const createBook = async (req: Request, res: Response) => {
  try {
    const RequestBody = req.body;
    const payload: IBook = {
      title: RequestBody.title,
      isbn: RequestBody.isbn,
      edition: RequestBody.edition,
      author_ids: RequestBody.author_ids,
      keywords: RequestBody.keywords,
      status: "A",
    };
    const addedBook = await BooksModel.create(payload);
    res.status(201).json(addedBook);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getAllBooks = async (req: Request, res: Response) => {
  try {
    const allBooks = await BooksModel.find({ status: "A" })
      .populate("author_list")
      .lean();

    res.status(200).json(allBooks);
  } catch (error) {
    console.log(error);
    res.status(404).json(error.message);
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const delId = req.params.id;
    const delBook = await BooksModel.findOneAndReplace(
      { _id: delId, status: "A" },
      { status: "D" },
      { new: true },
    );
    res.status(201).json(delBook);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const getBookById = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const book = await BooksModel.findOne({ _id: bookId, status: "A" })
      .populate("author_list")
      .lean();
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const RequestBody = req.body;
    const payload: IBook = {
      title: RequestBody.title,
      isbn: RequestBody.isbn,
      edition: RequestBody.edition,
      author_ids: RequestBody.author_ids,
      keywords: RequestBody.keywords,
    };
    const updatedBook = await BooksModel.findOneAndUpdate(
      { _id: bookId, status: "A" },
      payload,
      { new: true },
    );
    res.status(201).json(updatedBook);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const updateStock = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const RequestBody = req.body;
    const inStock: number = RequestBody.in_stock;
    const book = await BooksModel.findOne({ _id: bookId, status: "A" });

    const updatePayload = {
      in_stock: inStock,
      available_stock: inStock - book.borrowed_stock,
    };

    const updatedBook = await BooksModel.findOneAndUpdate(
      { _id: bookId, status: "A" },
      updatePayload,
      { new: true },
    );
    res.status(201).json(updatedBook);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export { createBook, getAllBooks, deleteBook, getBookById, updateBook, updateStock };
