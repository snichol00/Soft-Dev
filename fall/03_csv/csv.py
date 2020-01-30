#Sophie Nichol
#SoftDev1 pd9
#K06 -- CSV
#2019-09-17

import csv
import random

def occupations():
    
    # read in file
    file = open("occupations.csv", "r")
    occupations = file.readlines()
    #get rid of header and total
    occupations.pop(0)
    occupations.pop(len(occupations) - 1)
    
    # create dictionary and adjacent array
    jobs = {}
    for job in occupations:
        array = job.rsplit(',', 1)
        jobs[array[0]] = array[1]

    #pick random percentage
    r = random.randint(1, 998) / 10.0

    #keep adding the percentages until you get into the range of random percentage
    sum = 0
    for job in jobs:
        sum += float(jobs[job])
        if sum >= r:
            return job


print(occupations())
