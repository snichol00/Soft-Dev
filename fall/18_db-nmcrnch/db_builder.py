# Grace Mao, Jun tao Lei, Sophie Nichol
# SoftDev1 pd09
# K17 -- No Trouble
# 2019-10-10

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

DB_FILE="school.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

with open('students.csv', newline='') as file1:
    studentsCSV = csv.DictReader(file1) #DictReader object
    # each row is a dictionary
    command = "CREATE TABLE students (Name TEXT, Age INTEGER, ID INTEGER);"
    c.execute(command)
    commands = list()
    for row in studentsCSV:
        #print(row['name'])
        newCommand = "INSERT INTO students VALUES ('{}', {}, {});".format(row['name'], row['age'], row['id'])
        #print(newCommand)
        commands.append(newCommand) #add all commands to a list
    for item in commands: #run each command
        c.execute(item)

with open('courses.csv', newline='') as file2:
    coursesCSV = csv.DictReader(file2)
    command = "CREATE TABLE courses (Code TEXT, Mark INTEGER, ID INTEGER);"
    c.execute(command)
    commands = list()
    for row in coursesCSV:
        #print(row['name'])
        newCommand = "INSERT INTO courses VALUES ('{}', {}, {});".format(row['code'], row['mark'], row['id'])
        #print(newCommand)
        commands.append(newCommand) #add all commands to a list
    for item in commands: #run each command
        c.execute(item)

#used to check work
#command1 = "SELECT * FROM students;"
#command2 = "SELECT * FROM courses;"
#c.execute(command1)
#c.execute(command2)
#rows = c.fetchall()
#for row in rows:
#    print(row)

db.commit() #save changes
db.close()  #close database
