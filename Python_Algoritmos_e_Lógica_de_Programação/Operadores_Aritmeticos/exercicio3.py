peso = float(input("Digite o seu peso em kg (Exemplo: 67.5): "))
altura = float(input("Digite a sua altura em metros (Exemplo: 1.50): "))

imc = peso / (pow(altura, 2))
print(f"O seu IMC = {imc:.2f}")