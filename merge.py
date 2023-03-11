import re

with open('高考.txt', 'r', encoding='utf-8') as f:
    gk = f.read().splitlines()

with open('CET4.txt', 'r', encoding='utf-8') as f:
    cet = f.read().splitlines()

reg = re.compile(r""" |\(""")

def get_word(line: str) -> str:
    return reg.split(line)[0]

cet_words = list(map(get_word, cet))

result = cet.copy()

for line in gk:
    if get_word(line) not in cet_words or '(' in line or '&' in line:
        result.append(line)

result.sort(key=lambda l: l.lower())

print('\n'.join(result), file=open('out2.txt', 'w', encoding='utf-8'))
