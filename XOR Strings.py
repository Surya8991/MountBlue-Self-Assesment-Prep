def strings_xor(s, t):
    res = ""
    for i in range(len(s)):
        if s[i] == t[i]:    # 1st change
            res += '0'        # 2nd change
        else:
            res += '1'

    return res

s = input()
t = input()
print(strings_xor(s, t))



