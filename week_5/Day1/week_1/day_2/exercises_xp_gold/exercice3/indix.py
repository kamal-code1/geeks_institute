def sum_sequence(X: int) -> int:

    str_X = str(X)
    total = int(str_X) + int(str_X*2) + int(str_X*3) + int(str_X*4)
    return total


print(sum_sequence(3))  
