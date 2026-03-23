idade = int(input("Informe a sua idade: "))

print("Possui habilitacao? \n 0 - nao possui \n 1 - possui")

situacao = int(input("Informe a sua situacao (0 ou 1): "))

if(idade >= 18 and situacao == 1):
    print("Voce pode dirigir o veiculo")
else:
    print("Voce nao pode dirigir o veiculo")