import { describe, expect, it} from "vitest";
import { calculateShipping } from "./shipping";

describe("shipping", () => {

   it("free shipping for exactly R$200,00", () => {
    //expect(resultado).toBe(0)
   })

   it.each([
    ["01234-567", 1500],
    ["81234-567", 2000],
    ["71234-567", 2500],
    ["41234-567", 3000],
   ])("CEP %s paga frete de %d",(cep, valor) =>{
    const totalPedido = 5000

    const resultado = calculateShipping(cep, totalPedido)

    expect(resultado).toBe(valor)
   })
})