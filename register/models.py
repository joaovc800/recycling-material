from django.db import models
from uuid import uuid4

class Registers(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=255)
    cep = models.CharField(max_length=8)
    state = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    neighborhood = models.CharField(max_length=255)
    publicplace =  models.CharField(max_length=255)
    number =  models.IntegerField()
    complement = models.CharField(max_length=255)
    schedule = models.DateField()