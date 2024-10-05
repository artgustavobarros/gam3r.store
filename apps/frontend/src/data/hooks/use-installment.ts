import { InstallmentCalc } from '@gstore/core'

export default function useInstallment(
  price: number,
  amountOfInstallments: number = 12,
) {
  const installment = new InstallmentCalc().execute(price, amountOfInstallments)
  return installment
}
