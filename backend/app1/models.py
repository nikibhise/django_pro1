from django.db import models

class Employee(models.Model):
    emp_id = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=20)
    department = models.CharField(max_length=50)

