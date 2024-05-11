import mongoose from "mongoose";

type ICheckout = {
  member_id: mongoose.ObjectId;
  issue_date: Date;
  due_date: Date;
  has_returned: boolean;
  returned_date: Date;
  book_list: {
    book_id: mongoose.ObjectId;
    copies: number;
  };
};

const CheckoutSchema = new mongoose.Schema<ICheckout>({
  member_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "members",
  },
  issue_date: {
    type: Date,
    required: true,
  },
  due_date: {
    type: Date,
    required: true,
  },
  has_returned: {
    type: Boolean,
    required: true,
  },
  returned_date: {
    type: Date,
    required: false,
  },
  book_list: [
    {
      book_id: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "books",
      },
      copies: {
        type: Number,
        required: true,
      },
    },
  ],
},
{
  virtuals: true
});

CheckoutSchema.virtual("member_details", {
  localField: "member_id",
  foreignField: "_id",
  ref: "library-members",
  justOne: true,
});
CheckoutSchema.virtual("book_list.book_details", {
  localField: "book_list.book_id",
  foreignField: "_id",
  ref: "books",
});

const CheckoutModel = mongoose.model<ICheckout>("checkouts", CheckoutSchema);

export { CheckoutModel,ICheckout };
