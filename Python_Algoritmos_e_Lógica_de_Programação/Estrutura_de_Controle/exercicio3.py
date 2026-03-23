valor = int(input("Informe o valor do produto: "))
print("Forma de pagamento \n 1 - à vista \n 2 - a prazo")

pagamento = int(input("Escolha o pagamento (1 ou 2): "))
if(pagamento != 1):
    print(f"O total a pagar a prazo = {valor}")
else:
    desconto = valor - (valor * 0.1)
    print(f"O total a pagar à vista {desconto}")