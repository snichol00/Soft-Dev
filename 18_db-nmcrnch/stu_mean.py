
#Jun tao Lei, Grace Mao, Sophie Nichol
#SoftDev1 pd9
#K18: Average
#2019-10-11

import sqlite3
import csv

DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops

#create table for GPA's
create_GPA_table = """ CREATE TABLE IF NOT EXISTS stu_avg (
                                id INTEGER, avg INTEGER
                            );"""
c.execute(create_GPA_table)

# finds the GPA of each student based on their ID
def GPA(ID):
    list_grades = str.format("SELECT mark FROM courses WHERE id = {}", ID) #accesses all grades from one student
    all_grades = c.execute(list_grades)
    grades = all_grades.fetchall()
    sum = 0
    for mark in grades:
        sum += mark[0]
    return sum/len(grades)

# makae a list of all IDs
id_list = "SELECT id FROM students"
result = c.execute(id_list)
ids = result.fetchall()

# add values to table
for id in ids:
    add_data = str.format("INSERT INTO stu_avg VALUES ({}, {});", id[0], GPA(id[0]))
    c.execute(add_data)

command2 = """
            SELECT * FROM stu_avg;
           """

db.commit() #save changes
db.close()  #close database
