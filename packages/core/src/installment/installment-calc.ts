import { MAX_INSTALLMENTS, MONTHLY_TAX_RATE } from '../constants'
import Installment from './installment'

export default class InstallmentCalc {
  execute(
    price: number,
    numberOfInstallments: number = MAX_INSTALLMENTS,
    taxRate: number = MONTHLY_TAX_RATE,
  ): Installment {
    if (numberOfInstallments < 2 || numberOfInstallments > MAX_INSTALLMENTS) {
      throw new Error('Invalid amount of installments')
    }

    const totalPriceWithTaxes = this.compoundTaxesCalc(
      price,
      taxRate,
      numberOfInstallments,
    )

    return {
      totalPrice: this.amountWithTwoDecimals(totalPriceWithTaxes),
      taxRate,
      numberOfInstallments,
      installmentPrice: this.amountWithTwoDecimals(
        totalPriceWithTaxes / numberOfInstallments,
      ),
    }
  }

  private compoundTaxesCalc(
    totalPrice: number,
    taxRate: number,
    numberOfInstallments: number,
  ): number {
    return totalPrice * Math.pow(1 + taxRate, numberOfInstallments)
  }

  private amountWithTwoDecimals(price: number): number {
    return Math.round(price * 100) / 100
  }
}
