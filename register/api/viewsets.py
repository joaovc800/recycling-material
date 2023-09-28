from rest_framework import viewsets
from register.api import serializers
from register import models

class RegistersViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.RegistersSerializers
    queryset = models.Registers.objects.all()