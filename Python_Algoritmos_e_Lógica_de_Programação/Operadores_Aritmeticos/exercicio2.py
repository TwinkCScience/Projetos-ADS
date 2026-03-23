nome = input("Digite o nome do aluno: ")
nota_1 = float(input("Digite a primeira nota: "))
nota_2 = float(input("Digite a segunda nota: "))
nota_3 = float(input("Digite a terceira nota: "))
nota_4 = float(input("Digite a quarta nota: "))
notas = nota_1, nota_2, nota_3, nota_4

media = sum(notas) / len(notas)
print(f"O aluno {nome} obteve a média = {media}")