import { ExpenseClaimFormModel } from "../store/expenseClaimForm/types";

export interface ExpenseClaimFormValidationError {
  field: string;
  message: string;
}

export class ExpenseClaimFormValidator {
  private readonly rules = [{ field: "currency", mandatory: true }];

  private readonly values: ExpenseClaimFormModel;
  public errors: ExpenseClaimFormValidationError[] = [];

  constructor(formValues: ExpenseClaimFormModel) {
    this.values = formValues;
  }

  validate() {
    if (!this.values.currency)
      this.errors.push({ field: "currency", message: "Mandatory" });

    if (!this.values.amount)
      this.errors.push({ field: "amount", message: "Mandatory" });

    if (!this.values.category)
      this.errors.push({ field: "category", message: "Mandatory" });
  }
}
