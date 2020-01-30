#Jun tao Lei, Grace Mao, Sophie Nichol
#SoftDev1 pd9
#K18: Average
#2019-10-11

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O

DB_FILE="school.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops


# calculates and displays the average of each student (STEP 2)
command = """
            SELECT name, students.id, SUM(mark) / COUNT(mark) FROM courses, students
            WHERE courses.id = students.id
            GROUP BY students.id;
          """

# facilitate adding rows to courses (STEP 5)
print("To stop adding courses, press ENTER")
add = True;
while (add):
    code = input("Course code: ")
    if (code == ""):
        add = False
    else:
        mark = input("Course mark: ")
        id = input("ID: ")
        print(type(code))
        commandAdd = """
                        INSERT INTO courses VALUES ( '{}', {}, {} );
                     """.format(code, mark, id)
        c.execute(commandAdd)

# creates new table stu_avg (STEP 4)
command1 = """
            CREATE TABLE stu_avg ( id INTEGER, average INTEGER );
           """

c.execute(command1) #command1 executed first for fetchall purposes
c.execute(command)

# creating a list of the rows in the result of command
rows = c.fetchall()
#print(type(rows)) --> rows is a list
for row in rows:
    print("{}, {}: {}".format(row[0], row[1], row[2]))
    # insert the id, average into stu_avg for each student
    newCommand = "INSERT INTO stu_avg VALUES ({}, {})".format(row[1], row[2])
    c.execute(newCommand)
    #print(row)

##USED TO TEST INSERTION OF VALUES
command2 = """
           SELECT * FROM stu_avg;
           """
c.execute(command2)
r2 = c.fetchall()
for r in r2:
    print(r)

db.commit() #save changes
db.close()  #close database
