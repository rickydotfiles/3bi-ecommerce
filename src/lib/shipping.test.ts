import { describe, expect, it} from "vitest";
import { calculateShipping } from "./shipping";

describe("shipping", () => {
   it("free shipping for exactly R$200,00", () => {
    const valor = 20000
    const cep = "01001-000"
    
    const resultado = calculateShipping(cep, valor)

    expect(resultado).toBe(0)
   })
})