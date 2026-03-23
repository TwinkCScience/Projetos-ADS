quantidade = int(input("Informe a quantidade de cadeiras que irá comprar: "))
if(quantidade < 50):
    valor = quantidade * 45
    print(f"O total a pagar = {valor}")
else:
    valor = quantidade * 40
    print(f"O total a pagar = {valor}")