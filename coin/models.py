from unicodedata import name
from django.db import models

# Create your models here.


class coin(models.Model):

  name      = models.CharField(max_length=30, null=True, blank=True)
  price     = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
  