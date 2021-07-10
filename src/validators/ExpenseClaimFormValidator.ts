import { ExpenseClaimFormModel } from "../store/expenseClaimForm/types";

export interface ExpenseClaimFormValidationError {
  field: string;
  message: string;
}

export class ExpenseClaimFormValidator {
  private readonly values: ExpenseClaimFormModel;
  public errors: ExpenseClaimFormValidationError[] = [];

  constructor(formValues: ExpenseClaimFormModel) {
    this.values = formValues;
  }

  validate() {
    if (!this.values.amount)
      this.errors.push({ field: "amount", message: "Mandatory" });

    if (!this.values.description)
      this.errors.push({ field: "description", message: "Mandatory" });
  }
}
