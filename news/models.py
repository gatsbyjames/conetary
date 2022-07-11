from venv import create
from django.db import models

# Create your models here.


class News(models.Model):
  subject = models.CharField(max_length=30)
  content = models.TextField(max_length=1500)
  create_date = models.DateField()

  def __str__(self):
    return self.subject


class Comment(models.Model):
  news = models.ForeignKey(News, on_delete=models.CASCADE)
  content = models.TextField(max_length=1500)
  create_date = models.DateField()

  def __str__(self):
    return self.content