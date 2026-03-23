print("Estado civil \n s - solteiro \n c - casado \n d - divorciado \n v - viuvo")

estado_civil = input("Escolha uma opcao (digite s, c, d ou v): ").lower()

if estado_civil.isdigit():
    print("Nao e permitido numeros")
elif estado_civil == "s":
    print("Sua escolha é solteiro")
elif estado_civil == "c":
    print("Sua escolha é casado")
elif estado_civil == "d":
    print("Sua escolha é divorciado")
elif estado_civil == "v":
    print("Sua escolha é viuvo")
else:
    print("Opcao invalida")