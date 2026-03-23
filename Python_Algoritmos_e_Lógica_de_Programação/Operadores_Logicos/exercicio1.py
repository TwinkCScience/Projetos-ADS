num_1 = int(input("Digite um número: "))
num_2 = int(input("Digite outro número: "))

r1 = num_1 > num_2 and num_1 == num_2
r2 = num_1 <= num_2 or num_1 != num_2
r3 = not num_1 < num_2

print(f"{num_1} > {num_2} e {num_1} == {num_2} é {r1}")
print(f"{num_1} <= {num_2} ou {num_1} != {num_2} é {r2}")
print(f"não {num_1} < {num_2} é {r3}")