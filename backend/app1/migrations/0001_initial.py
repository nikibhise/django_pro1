# Generated by Django 5.0 on 2023-12-12 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('emp_id', models.IntegerField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=20)),
                ('department', models.CharField(max_length=50)),
            ],
        ),
    ]
