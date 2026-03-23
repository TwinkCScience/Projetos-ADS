salario = int(input("Informe o salario: "))
tempo = int(input("Informe o tempo de servico (em anos inteiros): "))
idade = int(input("Informe a idade (anos): "))

if(tempo > 3 and idade > 30 and salario < 4000):
    print("Recebera reajuste")
else:
    print("Nao recebera reajuste")