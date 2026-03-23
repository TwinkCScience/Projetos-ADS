nome = input("Informe o nome do vendedor: ")
salario_min = float(input("Informe o salário mínimo: "))
valor_total = int(input("Informe o valor total das vendas efetuadas no mês: "))

comissao = salario_min + (valor_total * 0.15)

print(f"O vendedor(a) {nome} recebeu no final do mês o salário = {comissao:.2f}")