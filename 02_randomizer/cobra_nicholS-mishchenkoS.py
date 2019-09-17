import random
def randomselectlist(inputdict, index = random.randint(0, 2) ):
    if index == 0:
        return inputdict['orpheus']
    elif index == 1:
        return inputdict['rex']
    else:
        return inputdict['endymion']

def randomselectname(inputlist):
    index = random.randint(0,len(inputlist) - 1)
    return inputlist[index]

def getname(inputdict):
    names = randomselectlist(inputdict)
    name = randomselectname(names)
    print (name)

KREWES = { 'orpheus': ['Emily', 'Kevin', 'Vishwaa', 'Eric', 'ray', 'Jesse', 'Tiffany',
                       'Amanda', 'Junhee', 'Jackie', 'Tyler', 'Emory', 'Ivan'],
           'rex': ['William', 'Joseph', 'Calvin', 'Ethan', 'Moody', 'Mo'],
           'endymion' : ['Grace', 'Nahi', 'Derek', 'Jun Tao', 'Connor']
           }
getname(KREWES)
