# Juntao Lei & Sophie Nichol
# SoftDev1 pd09
# K17 -- No Trouble
# 2019-10-10

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#==========================================================

# < < < INSERT YOUR POPULATE-THE-DB CODE HERE > > >


with open('students.csv') as studentFile:
    studentreader = csv.DictReader(studentFile)
    make_students = "CREATE TABLE IF NOT EXISTS students(name TEXT, age INTEGER, id INTEGER)"
    c.execute(make_students)
    for row in studentreader:
        name = row['name']
        age = int(row['age'])
        id = int(row['id'])
        enter_vals = str.format("INSERT INTO students VALUES ('{}', {}, {});", name, age, id)
        c.execute(enter_vals)
studentFile.close()

with open('courses.csv') as courseFile:
    coursereader = csv.DictReader(courseFile)
    make_courses = "CREATE TABLE IF NOT EXISTS courses(code TEXT, mark INTEGER, id INTEGER)"
    c.execute(make_courses)
    for row in coursereader:
        code = row['code']
        mark = int(row['mark'])
        id = int(row['id'])
        enter_vals = str.format("INSERT INTO courses VALUES ('{}', {}, {});", code, mark, id)
        c.execute(enter_vals)
courseFile.close()



#==========================================================

db.commit() #save changes
db.close()  #close database
